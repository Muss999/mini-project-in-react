import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

const PostsList = ({ getPosts, posts, deletePost }) => {
    useEffect(() => {
        getPosts();
    }, []);
    return (
        <div className="postList-div">
            <div className="container d-flex justify-content-center flex-wrap">
                {posts.map((post) => (
                    <Card
                        key={post.id}
                        className="text-center m-4 border-0 card-div"
                        data-bs-theme="dark"
                    >
                        <Card.Img
                            variant="top"
                            src={post.image}
                            height="200px"
                        />
                        <Card.Body>
                            <Card.Title>
                                <h2>{post.title}</h2>
                            </Card.Title>
                            <Card.Text>{post.desc}</Card.Text>

                            <Link to={`/edit/${post.id}`}>
                                <Button className="m-2 card-btn-edit card-btns border-0">
                                    Edit
                                </Button>
                            </Link>
                            <Link to={`/details/${post.id}`}>
                                <Button className="m-2 card-btn-details card-btns border-0">
                                    Details
                                </Button>
                            </Link>
                            <Button
                                className="m-2 card-btn-delete card-btns border-0"
                                onClick={() => deletePost(post.id)}
                            >
                                Delete
                            </Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default PostsList;
