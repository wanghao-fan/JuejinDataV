import request from "@/utils/request";

// 作者榜
// cursor
// limit
export function getDeviceList(params) {
  return request({
    url: "/user_api/v1/author/recommend",
    method: "get",
    params
  });
}

export default {
  getDeviceList
};
