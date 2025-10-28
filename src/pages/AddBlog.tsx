import React, { useState, useEffect } from 'react';
import { supabase, Blog } from '../lib/supabase';
import './AddBlog.css';

const AddBlog: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Form data
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    image_url: '',
    seo_title: '',
    seo_description: ''
  });

  useEffect(() => {
    fetchAdminPassword();
  }, []);

  const fetchAdminPassword = async () => {
    try {
      const { data, error } = await supabase
        .from('admin_passwords')
        .select('password')
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      if (data) {
        setAdminPassword(data.password);
      }
    } catch (err) {
      console.error('Error fetching admin password:', err);
    }
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === adminPassword) {
      setIsAuthenticated(true);
      setError(null);
    } else {
      setError('Invalid password');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const slug = formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      
      const { data, error } = await supabase
        .from('blogs')
        .insert([{
          ...formData,
          slug,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }])
        .select();

      if (error) throw error;

      setSuccess('Blog post created successfully!');
      setFormData({
        title: '',
        content: '',
        excerpt: '',
        image_url: '',
        seo_title: '',
        seo_description: ''
      });
    } catch (err: any) {
      setError(err.message || 'Failed to create blog post');
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="page add-blog-page">
        <div className="container">
          <div className="password-form-container">
            <h1 className="page-title">Admin Access</h1>
            <p className="password-description">
              Please enter the admin password to access the blog creation panel.
            </p>
            <form onSubmit={handlePasswordSubmit} className="password-form">
              <div className="form-group">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input"
                  required
                />
              </div>
              {error && <div className="error-message">{error}</div>}
              <button type="submit" className="btn" disabled={loading}>
                {loading ? 'Verifying...' : 'Access Panel'}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page add-blog-page">
      <div className="container">
        <h1 className="page-title">Add New Blog Post</h1>
        
        {success && <div className="success-message">{success}</div>}
        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="blog-form">
          <div className="form-group">
            <label htmlFor="title" className="form-label">Title *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="excerpt" className="form-label">Excerpt *</label>
            <textarea
              id="excerpt"
              name="excerpt"
              value={formData.excerpt}
              onChange={handleInputChange}
              className="form-textarea"
              rows={3}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="image_url" className="form-label">Image URL *</label>
            <input
              type="url"
              id="image_url"
              name="image_url"
              value={formData.image_url}
              onChange={handleInputChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="content" className="form-label">Content *</label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              className="form-textarea"
              rows={10}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="seo_title" className="form-label">SEO Title</label>
            <input
              type="text"
              id="seo_title"
              name="seo_title"
              value={formData.seo_title}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="seo_description" className="form-label">SEO Description</label>
            <textarea
              id="seo_description"
              name="seo_description"
              value={formData.seo_description}
              onChange={handleInputChange}
              className="form-textarea"
              rows={3}
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn" disabled={loading}>
              {loading ? 'Creating...' : 'Create Blog Post'}
            </button>
            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={() => setIsAuthenticated(false)}
            >
              Logout
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
