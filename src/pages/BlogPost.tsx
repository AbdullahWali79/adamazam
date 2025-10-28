import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase, Blog } from '../lib/supabase';
import './BlogPost.css';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetchBlog(id);
    }
  }, [id]);

  const fetchBlog = async (blogId: string) => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('id', blogId)
        .single();

      if (error) throw error;
      setBlog(data);
    } catch (err) {
      setError('Blog post not found');
      console.error('Error fetching blog:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="page blog-post-page">
        <div className="container">
          <div className="loading">Loading blog post...</div>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="page blog-post-page">
        <div className="container">
          <div className="error">Error: {error || 'Blog post not found'}</div>
          <Link to="/blog" className="btn">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page blog-post-page">
      <div className="container">
        <div className="blog-post-header">
          <Link to="/blog" className="back-link">← Back to Blog</Link>
          <h1 className="blog-post-title">{blog.title}</h1>
          <div className="blog-post-meta">
            <span className="blog-date">
              {new Date(blog.created_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>
        </div>
        
        <div className="blog-post-image">
          <img src={blog.image_url} alt={blog.title} />
        </div>
        
        <div className="blog-post-content">
          <div 
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
        
        <div className="blog-post-footer">
          <Link to="/blog" className="btn">Back to All Posts</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
