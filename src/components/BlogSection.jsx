import React from 'react';

const blogPosts = [
  {
    title: 'First Blog Post',
    date: 'October 28, 2024',
    summary: 'This is a short summary of the first blog post.',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Second Blog Post',
    date: 'October 25, 2024',
    summary: 'This post talks about project learnings.',
    image: 'https://via.placeholder.com/150',
  },
];

const BlogSection = () => {
  return (
    <div className="bg-gray-100 py-10 px-6">
      <h2 className="text-4xl font-bold text-center mb-8">Blog</h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 text-sm">{post.date}</p>
              <p className="text-gray-700 mt-2">{post.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
