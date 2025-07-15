import React from 'react';
import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';

const BlogCard = ({ blog }) => {
  // Format the date using date-fns
  const formattedDate = blog.createdAt && blog.createdAt.$date
    ? formatDistanceToNow(new Date(blog.createdAt.$date), { addSuffix: true })
    : 'Unknown date';

  // Get category name based on category id
  const getCategoryName = (categoryId) => {
    const categories = {
      '1': 'Technology',
      '2': 'Lifestyle',
      '3': 'Travel',
      '4': 'Food',
      '5': 'Business',
    };
    return categories[categoryId] || 'Uncategorized';
  };

  // Get a default image if imageUrl is not valid
  const imageUrl = blog.imageUrl && blog.imageUrl !== 'hfhfh'
    ? blog.imageUrl
    : 'https://via.placeholder.com/800x450?text=Blog+Image';

  // Create a slug from the title for the URL
  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s]/gi, '')
      .replace(/\s+/g, '-');
  };

  const blogSlug = createSlug(blog.title || 'untitled-blog');

  return (
    <Link to={`/blog/${blog._id.$oid}/${blogSlug}`} className="group">
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
        {/* Image */}
        <div className="aspect-video relative overflow-hidden">
          <img 
            src={imageUrl} 
            alt={blog.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-indigo-600 text-white text-xs px-3 py-1 rounded-full font-medium">
              {getCategoryName(blog.category)}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
            {blog.title || 'Untitled Blog'}
          </h3>

          <div className="text-sm text-gray-500 mb-4">
            {formattedDate}
          </div>

          <p className="text-gray-600 line-clamp-3 mb-4 flex-grow">
            {blog.content && blog.content.length > 150 
              ? `${blog.content.substring(0, 150)}...` 
              : blog.content || 'No content available'}
          </p>

          <div className="mt-auto pt-4">
            <span className="inline-flex items-center text-indigo-600 font-medium group-hover:underline">
              Read more
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;