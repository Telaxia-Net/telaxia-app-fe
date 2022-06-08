import axiosHttp from "../../../core/services/http-common";

class UserService {
  getUserName(id) {
    return axiosHttp.get(`/users/${id}`).then((res) => res.data.name);
  }
}

export default new UserService();
