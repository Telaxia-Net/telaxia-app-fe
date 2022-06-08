import axiosHttp from "../../../core/services/http-common";

class SessionSecurity {
  signIn(user) {
    return axiosHttp.post(`/signin`, user);
  }

  signUp(user) {
    return axiosHttp.post(`/signup`, user);
  }

  setCurrentUser(user) {
    localStorage.setItem("currentUser", user);
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser"));
  }

  setCurrentToken(token) {
    localStorage.setItem("currentToken", token);
  }

  getCurrentToken() {
    return JSON.parse(localStorage.getItem("currentToken"));
  }

  signOut() {
    localStorage.removeItem("currentToken");
    localStorage.removeItem("currentUser");
  }
}

export default new SessionSecurity();
