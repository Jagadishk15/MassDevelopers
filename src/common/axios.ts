import axios from 'axios';
import { API_MSHospitalBaseUrl, API_MSInventoryUrl } from './common';
debugger;
let baseURL = API_MSHospitalBaseUrl + "api";
const httpbaseURL = axios.create({
    baseURL
})
let MSInventoryUrl = API_MSInventoryUrl + "api";
/*const httpMSInventoryUrl = axios.create({
    MSInventoryUrl
})*/


/* Response Interceptors */
const interceptResErrors = (err) => {
  try {
    // check for response code 123 and redirect to login
    err = Object.assign(new Error(), {message: err.response.data});
  } catch (e) {
    // check for response code 123 and redirect to login
    // Will return err if something goes wrong
  }
  return Promise.reject(err);
};
const interceptResponse = (res) => {
  try {
    // check for response code 123 and redirect to login
    return Promise.resolve(res.data);
  } catch (e) {
    // check for response code 123 and redirect to login
    return Promise.resolve(res);
  }
};
httpbaseURL.interceptors.response.use(interceptResponse, interceptResErrors);

/* Request Interceptors */
const interceptReqErrors = err => Promise.reject(err);
const interceptRequest = (config) => {
  return config;
};
httpbaseURL.interceptors.request.use(interceptRequest, interceptReqErrors);

export default { httpbaseURL };

// import axios from "axios";
// import Vue from "vue";

// import { API_MSHospitalBaseUrl, API_MSInventoryUrl } from './common';
// let baseURL = API_MSHospitalBaseUrl + "api";
// const http = axios.create({
//   baseURL,
// });
// http.interceptors.request.use(
//   (config) => {
//     let token = localStorage.token;
//     if (token) {
//       config.headers.common["Authorization"] = "bearer " + token;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
// http.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response && error.response.status == 401) {
//       error.message = 'Authorization has been denied for this request.';
//      // Vue.$cookies.remove("session");
//       localStorage.removeItem("token");
//       setTimeout(() => {
//         location.reload();
//       }, 1000);
//     }
//     return Promise.reject(error);
//   }
// );
// export default http;
