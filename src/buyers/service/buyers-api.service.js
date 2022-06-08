import axiosHttp from "../../../core/services/http-common";
class BuyerService {
  getBuyer(id) {
    return axiosHttp.get(`/buyers/${id}`);
  }
}

export default new BuyerService();
