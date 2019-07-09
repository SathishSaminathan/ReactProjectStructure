import axios from "axios";
import { Services } from "constants/AppConstants";

export default class OnboardServices {
  onboardService(type, data) {
    let URL = null;
    switch (type) {
      case Services.OnboardVariables.LOGIN:
        URL = "https://api.myjson.com/bins/16ialr";
      default:
        break;
    }
    return axios.get(URL);
  }
}
