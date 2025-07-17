import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const BlogListingPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${process.env.REACT_APP_BLOG_API_URL}`);
      if (!response.ok) {
        throw new Error('Failed to fetch blogs');
      }
      const data = await response.json();
      setBlogs(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const BlogCard = ({ blog }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 bg-gray-200 overflow-hidden">
        {blog.imageUrl ? (
          <img 
            src={blog.imageUrl} 
            alt={blog.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <span className="text-gray-400">No Image</span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="mb-2">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-semibold">
            {blog.category}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {blog.title}
        </h3>
        
        <div className="flex items-center justify-between">
          <Link to={`/blog/${blog.slug}`} className="text-blue-600 hover:text-blue-800 font-medium">
            Read More →
          </Link>
          
          {blog.status && (
            <span className={`text-xs px-2 py-1 rounded-full ${
              blog.status === 'published' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-yellow-100 text-yellow-800'
            }`}>
              {blog.status}
            </span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
  
      {/* Hero Section */}
      <Hero 
              title="Our Blog"
              text="Discover the features that make our Discover insights, stories, and updates from our team" 
            />

      {/* Blog Listing Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Articles</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest thoughts, tutorials, and industry insights
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <div className="text-red-700 px-4 py-3 rounded max-w-md mx-auto">
              <strong className="font-bold">Error: </strong>
              <span className="block sm:inline">{error}</span>
            </div>
            <button 
              onClick={fetchBlogs}
              className="mt-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4"
            >
              Try Again
            </button>
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No blogs found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <BlogCard key={blog.id || blog._id} blog={blog} />
            ))}
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default BlogListingPage;