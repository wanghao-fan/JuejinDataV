import axios from "axios";
axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8";
// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: process.env.VUE_APP_BASE_API,
  withCredentials: false,
  // 超时
  timeout: 1000000,
  headers: { "Content-Type": "application/json; charset=utf-8" }
});
// request拦截器
service.interceptors.request.use(
  config => {
    // config.headers["***"] = """;
    return config;
  },
  error => {
    console.log(error);
    Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  res => {
    // const code = res.data.code;
    return res.data;
  },
  error => {
    console.log("err" + error);
    return Promise.reject(error);
  }
);

export default service;
