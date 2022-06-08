import axiosHttp from "../../../core/services/http-common";

class DesignService {
  getDesign(id) {
    return axiosHttp.get(`/designs/${id}`);
  }
  getDesigns() {
    return axiosHttp.get(`/designs`);
  }
}

export default new DesignService();
