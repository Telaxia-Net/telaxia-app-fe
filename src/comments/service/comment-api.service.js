import axiosHttp from "../../../core/services/http-common";

class CommentService {
  getComment(id) {
    return axiosHttp.get(`/comments/${id}`);
  }
  getCommentsByPostId(postId) {
    return axiosHttp.get(`/comments?postId=${postId}`);
  }

  postComment(newComment) {
    return axiosHttp.post(`/comments`, newComment);
  }
}

export default new CommentService();
