import baseUrl from "../config";

const Favorite = {
    // Create favorite
    create(id, params) {
      return fetch(`${baseUrl}/products/${id}/favorites`, {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
      }).then(res => res.json());
    },
    // Delete favorite
    destroy(id) {
      return fetch(`${baseUrl}/favorites/${id}`, {
        credentials: "include",
        method: "DELETE"
      }).then(res => res.json());
    },
  };
  
  export default Favorite;
  