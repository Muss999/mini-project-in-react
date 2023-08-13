import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AddForm from "./components/CRUD/AddForm";
import PostsList from "./components/CRUD/PostsList";
import Details from "./components/CRUD/Details";
import EditForm from "./components/CRUD/EditForm";
import axios from "axios";

const MainRoutes = () => {
    const API = "http://localhost:8000/posts";
    const [posts, setPosts] = useState([]);
    const [onePost, setOnePost] = useState(null);

    //! CREATE
    function addPost(newPost) {
        axios.post(API, newPost);
    }

    //! READ
    async function getPosts() {
        let res = await axios(API);
        setPosts(res.data);
    }

    //! DELETE
    async function deletePost(id) {
        await axios.delete(`${API}/${id}`);
        getPosts();
    }

    //! DETAILS
    async function getOnePost(id) {
        let res = await axios(`${API}/${id}`);
        setOnePost(res.data);
    }

    //! EDIT
    async function updatePost(id, editedPost) {
        await axios.patch(`${API}/${id}`, editedPost);
        getPosts();
    }

    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <PostsList
                            getPosts={getPosts}
                            posts={posts}
                            deletePost={deletePost}
                        />
                    }
                />
                <Route path="/add" element={<AddForm addPost={addPost} />} />
                <Route
                    path="/details/:id"
                    element={
                        <Details getOnePost={getOnePost} onePost={onePost} />
                    }
                />
                <Route
                    path="/edit/:id"
                    element={
                        <EditForm
                            getOnePost={getOnePost}
                            onePost={onePost}
                            updatePost={updatePost}
                        />
                    }
                />
            </Routes>
        </>
    );
};

export default MainRoutes;
