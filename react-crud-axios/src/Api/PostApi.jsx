import axios from "axios";

const Api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

// get method

export const getPost = () => {
    return Api.get("/posts");
};

// delete method

export const  deletePost = (id) => {
    return Api.delete(`/posts/${id}`);
};

// Post Method

export const postData = (post) => {
    return Api.post("/posts", post);
};

// put method

export const updateData = (id, post) => {
    return Api.put(`/posts/${id}`, post);
};