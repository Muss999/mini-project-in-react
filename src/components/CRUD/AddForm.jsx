import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./inputStyle.css";
const AddForm = ({ addPost }) => {
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [like, setLike] = useState(false);

    function createPost() {
        let newPost = {
            title,
            image,
            desc,
            like,
        };
        addPost(newPost);
    }
    return (
        <div className="input-div-parent">
            <div className="input-div">
                <h1 className="text-white mb-5">Add Form</h1>
                <div className="input-group mb-3">
                    <span className="input-group-text inputs-bg">✨</span>
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control inputs-bg"
                            id="floatingInputGroup1"
                            placeholder="Title"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <label htmlFor="floatingInputGroup1">Title</label>
                    </div>
                </div>

                <div className="input-group mb-3 ">
                    <span className="input-group-text inputs-bg">🏞️</span>
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control inputs-bg"
                            id="floatingInputGroup12"
                            placeholder="Image URL"
                            onChange={(e) => setImage(e.target.value)}
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
                        onClick={createPost}
                    >
                        Create Post
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default AddForm;
