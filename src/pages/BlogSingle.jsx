import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './BlogSingle.css';

const API_URL =
  import.meta.env.VITE_API_URL ||
  import.meta.env.REACT_APP_API_URL ||
  'http://localhost:5000';

const BlogSingle = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRelatedBlogs = useCallback(async (category) => {
    try {
      const response = await axios.get(
        `${API_URL}/api/blogs?website=master&status=published&category=${category}&limit=3`
      );

      if (response.data.success) {
        setRelatedBlogs(
          response.data.data.filter((b) => b.slug !== slug)
        );
      }
    } catch (error) {
      console.error('Error fetching related blogs:', error);
    }
  }, [slug]);

  const fetchBlog = useCallback(async () => {
    try {
      const response = await axios.get(`${API_URL}/api/blogs/slug/${slug}`);

      if (response.data.success) {
        setBlog(response.data.data);
        fetchRelatedBlogs(response.data.data.category);
      }
    } catch (error) {
      console.error('Error fetching blog:', error);
    } finally {
      setLoading(false);
    }
  }, [slug, fetchRelatedBlogs]);

  useEffect(() => {
    fetchBlog();
    window.scrollTo(0, 0);
  }, [fetchBlog]);

  if (loading) {
    return <div className="blog-single-loading">Loading...</div>;
  }

  if (!blog) {
    return (
      <div className="blog-not-found">
        <h2>Blog not found</h2>
        <Link to="/blog" className="btn-back">Back to Blog</Link>
      </div>
    );
  }

  return (
    <article className="blog-single">
      <div className="blog-single-hero">
        <img src={blog.coverImage} alt={blog.title} />
      </div>

      <div className="blog-single-container">
        <div className="blog-breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/blog">Blog</Link>
          <span>/</span>
          <span>{blog.category}</span>
        </div>

        <header className="blog-single-header">
          <span className="blog-single-category">{blog.category}</span>
          <h1>{blog.title}</h1>
          <div className="blog-single-meta">
            <span>By {blog.author}</span>
            <span>•</span>
            <span>
              {new Date(blog.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
            <span>•</span>
            <span>{blog.views} views</span>
          </div>
        </header>

        <div className="blog-single-content">
          {blog.content.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {blog.tags?.length > 0 && (
          <div className="blog-tags">
            {blog.tags.map((tag, index) => (
              <span key={index} className="blog-tag">#{tag}</span>
            ))}
          </div>
        )}
      </div>

      {relatedBlogs.length > 0 && (
        <section className="related-blogs">
          <div className="container">
            <h2>Related Articles</h2>
            <div className="related-blogs-grid">
              {relatedBlogs.map((relatedBlog) => (
                <Link
                  to={`/blog/${relatedBlog.slug}`}
                  key={relatedBlog._id}
                  className="related-blog-card"
                >
                  <img src={relatedBlog.coverImage} alt={relatedBlog.title} />
                  <div className="related-blog-content">
                    <span className="related-blog-category">
                      {relatedBlog.category}
                    </span>
                    <h3>{relatedBlog.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
};

export default BlogSingle;
