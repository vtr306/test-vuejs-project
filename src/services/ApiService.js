import axios from "axios";

class ApiService {
  constructor() {
    axios.defaults.baseURL = process.env.VUE_APP_API_URL;
  }
}

export const apiService = new ApiService();

export default axios;
