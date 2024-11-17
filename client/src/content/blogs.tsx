import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Define types for the blog post structure
interface BlogPost {
    fields: {
        authorName: string;
        authorId: number;
        blogTitle: string;
        authorPicture: {
            fields: {
                file: {
                    url: string;
                };
            };
        };
        blogPost: {
            content: {
                0: {
                    content: {
                        0: {
                            value: string;
                        };
                    };
                };
            };
        };
        publishedDate: string;
    };
    sys: {
        id: string;
    };
}

const Blogs: React.FC = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 1; // Number of posts per page

    useEffect(() => {
        // Fetch blog posts from the API
        axios
            .get('/api/posts')
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.error('There was an error fetching the posts:', error);
            });
    }, []);


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Handle pagination navigation
    const totalPages = Math.ceil(posts.length / postsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    return (
        <div>
            <h1>Blog Posts</h1>
            {currentPosts.length > 0 ? (
                currentPosts.map((post) => (
                    <div className="blogPost" key={post.sys.id}>
                        <h2>{post.fields.blogTitle}</h2>
                        <p>Author: {post.fields.authorName}</p>
                        <img src={post.fields.authorPicture.fields.file.url} alt="Author" />
                        <p>{post.fields.blogPost.content[0].content[0].value}</p>
                        <p className="date">
                            Date: {new Date(post.fields.publishedDate).toLocaleDateString()}
                        </p>
                        <p className="time">
                            Time: {new Date(post.fields.publishedDate).toLocaleTimeString()}
                        </p>
                    </div>
                ))
            ) : (
                <p>No blog posts available.</p>
            )}

            <div className="pagination">
                <button onClick={handlePrevPage} disabled={currentPage === 1}>
                    Previous
                </button>
                <span>
                    Page {currentPage} of {totalPages}
                </span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Blogs;
