import axiosHttp from "../../../core/services/http-common";

class DesignerService {
  getDesigners() {
    return axiosHttp.get("/designers");
  }
  getDesigner(id) {
    return axiosHttp.get(`/designers/${id}`);
  }
}

export default new DesignerService();
