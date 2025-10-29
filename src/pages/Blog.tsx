import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase, Blog as BlogType } from '../lib/supabase';
import './Blog.css';

const Blog: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setBlogs(data || []);
    } catch (err) {
      setError('Failed to fetch blogs');
      console.error('Error fetching blogs:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="page blog-page">
        <div className="container">
          <h1 className="page-title">Blog</h1>
          <div className="loading">Loading blogs...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page blog-page">
        <div className="container">
          <h1 className="page-title">Blog</h1>
          <div className="error">Error: {error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="page blog-page">
      <div className="container">
        <h1 className="page-title">Blog</h1>
        <p className="blog-intro">
          Explore the latest thoughts, insights, and stories from Adam Azam.
        </p>
        
        {blogs.length === 0 ? (
          <div className="no-blogs">
            <p>No blogs available yet. Check back soon!</p>
          </div>
        ) : (
          <div className="blog-grid">
            {blogs.map((blog) => (
              <div key={blog.id} className="blog-card">
                <img 
                  src={blog.image_url} 
                  alt={blog.title}
                  className="blog-image"
                />
                <div className="blog-content">
                  <h3 className="blog-title">{blog.title}</h3>
                  <p className="blog-excerpt">{blog.excerpt}</p>
                  <div className="blog-meta">
                    {new Date(blog.created_at).toLocaleDateString()}
                  </div>
                  <Link to={`/blog/${blog.id}`} className="btn">
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
