import { request } from "@/utils"

export const loginAPI = (formData) => {
  return request({
    url: "/authorizations",
    method: "post",
    data: formData
  })
}

export const getProfileAPI = () => {
  return request({
    url: "/user/profile",
    method: "get",
  })
}