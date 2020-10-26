import baseUrl from "../config";

const Product = {
    // Fetch all products
    all() {
      return fetch(`${baseUrl}/products`, {
        credentials: "include"
      }).then(res => res.json());
    },
    // Fetch one product
    one(id) {
      return fetch(`${baseUrl}/products/${id}`, {
        credentials: "include"
      }).then(res => res.json());
    },
    // Create one product
    create(params) {
      return fetch(`${baseUrl}/products`, {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
      }).then(res => res.json());
    },
    // Edit one product
    update(id, params) {
      return fetch(`${baseUrl}/products/${id}`, {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
      }).then(res => res.json());
    },
    // Delete one product
    destroy(id) {
      return fetch(`${baseUrl}/products/${id}`, {
        credentials: "include",
        method: "DELETE"
      }).then(res => res.json());
    }
  };
  
  export default Product;
  