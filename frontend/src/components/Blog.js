import React from 'react'
import './Blog.css'

export const Blog = ({blog}) => {
    return (
        <div className="blog">
          <h2 className="blog-title">{blog.title}</h2>
          <p className="blog-author">Written by:{blog.id} </p>
          <div className="blog-content">{blog.content}
          </div>
        </div>
      );
}


















