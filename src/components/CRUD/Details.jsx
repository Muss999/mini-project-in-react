import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Spinner } from "react-bootstrap";
import "./style.css";

const Details = ({ getOnePost, onePost }) => {
    const { id } = useParams();
    const [like, setLike] = useState(false);

    useEffect(() => {
        getOnePost(id);
    }, []);
    return (
        <div className="container d-flex justify-content-center postList-div">
            {onePost ? (
                <Card
                    className="text-center m-4 border-0 card-div"
                    data-bs-theme="dark"
                >
                    <Card.Img
                        variant="top"
                        src={onePost.image}
                        height="200px"
                    />
                    <Card.Body>
                        <Card.Title>{onePost.title}</Card.Title>
                        <Card.Text>{onePost.desc}</Card.Text>
                        <Card.Text>
                            <h2
                                className="h2-inline"
                                onClick={() => setLike(!like)}
                            >
                                {like ? "❤️" : "🤍"}
                            </h2>
                        </Card.Text>
                    </Card.Body>
                </Card>
            ) : (
                <Spinner animation="grow" variant="success" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            )}
        </div>
    );
};

export default Details;
