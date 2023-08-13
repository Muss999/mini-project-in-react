import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./inputStyle.css";

const EditForm = ({ getOnePost, onePost, updatePost }) => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [desc, setDesc] = useState("");
    const [like, setLike] = useState("");
    const { id } = useParams();

    useEffect(() => {
        getOnePost(id);
    }, []);

    useEffect(() => {
        if (onePost) {
            setTitle(onePost.title);
            setImage(onePost.image);
            setDesc(onePost.desc);
            setLike(onePost.like);
        }
    }, [onePost]);

    function saveChanges() {
        let editedPost = {
            title,
            image,
            desc,
            like,
        };
        updatePost(id, editedPost);
    }
    return (
        <div className="input-div-parent">
            <div className="input-div">
                <h1 className="text-white mb-5">Edit Form</h1>
                <div className="input-group mb-3">
                    <span className="input-group-text inputs-bg">✨</span>
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control inputs-bg"
                            id="floatingInputGroup1"
                            placeholder="Title"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                        />
                        <label htmlFor="floatingInputGroup1">Title</label>
                    </div>
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text inputs-bg">🏞️</span>
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control inputs-bg"
                            id="floatingInputGroup12"
                            placeholder="Image URL"
                            onChange={(e) => setImage(e.target.value)}
                            value={image}
                        />
                        <label htmlFor="floatingInputGroup12">Image URL</label>
                    </div>
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text inputs-bg">🔎</span>
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control inputs-bg"
                            id="floatingInputGroup123"
                            placeholder="Description"
                            onChange={(e) => setDesc(e.target.value)}
                            value={desc}
                        />
                        <label htmlFor="floatingInputGroup123">
                            Description
                        </label>
                    </div>
                </div>

                <Link to="/">
                    <button
                        type="button"
                        className="btn btn-outline-success"
                        onClick={saveChanges}
                    >
                        Save
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default EditForm;
