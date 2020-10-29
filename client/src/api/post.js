import baseUrl from "../config";

const Post = {
    // Fetch all posts
    all() {
      return fetch(`${baseUrl}/posts`, {
        credentials: "include"
      }).then(res => res.json());
    },
    // Fetch one post
    one(id) {
      return fetch(`${baseUrl}/posts/${id}`, {
        credentials: "include"
      }).then(res => res.json());
    },
    // Create one post
    create(params) {
      return fetch(`${baseUrl}/posts`, {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
      }).then(res => res.json());
    },
    // Edit one post
    update(id, params) {
      return fetch(`${baseUrl}/posts/${id}`, {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
      }).then(res => res.json());
    },
    // Delete one post
    destroy(id) {
      return fetch(`${baseUrl}/posts/${id}`, {
        credentials: "include",
        method: "DELETE"
      }).then(res => res.json());
    }
  };
  
  export default Post;
  