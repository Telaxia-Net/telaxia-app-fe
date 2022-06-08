import axiosHttp from "../../../core/services/http-common";

class PostService {
  getPosts() {
    return axiosHttp.get(`/posts-designer`);
  }
  getPostsByUserId(userId) {
    return axiosHttp.get(`/posts-designer?userId=${userId}`);
  }
  getPost(id) {
    return axiosHttp.get(`/posts-designer/${id}`);
  }
}

export default new PostService();
