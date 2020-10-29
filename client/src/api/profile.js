import baseUrl from "../config";

const Profile = {
    // Fetch profile
    get() {
      return fetch(`${baseUrl}/profiles/1`, {
        credentials: "include"
      }).then(res => res.json());
    },
    // Edit profile
    update(params) {
      return fetch(`${baseUrl}/profiles/1`, {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
      }).then(res => res.json());
    }
  };
  
  export default Profile;
  