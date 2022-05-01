import Axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import qs from "qs";
import {store} from "../store";
import {message} from "antd";

/**
 * Http 默认配置
 */
const defaultConfig: AxiosRequestConfig = {
    baseURL: "http://localhost:8080",
    timeout: 10000, //  请求超时时间(ms)
    headers: {  //  请求头
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest"
    },
    paramsSerializer: params => qs.stringify(params, {indices: false})  //  序列化数组格式参数
}

/**
 * Axios 实例
 */
const axiosInstance: AxiosInstance = Axios.create(defaultConfig)

/**
 * 请求拦截器
 */
axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
    //  每个请求携带 token
    const token = store.getState().user.token
    if (token && config.headers) {
        config.headers.Authorization = token
    }

    return config
}, error => {
    return Promise.reject(error)
})

/**
 * 响应拦截器
 */
axiosInstance.interceptors.response.use((response: AxiosResponse): Promise<any> => {
    const data = response.data
    if (data.code !== "OK") {
        if (data.code === "UNAUTHORIZED") {
            location.replace("/401")
        } else if (data.code === "FORBIDDEN") {
            location.replace("/403")
        } else if (data.code === "NOT_FOUND") {
            location.replace("/404")
        } else if (data.code === "UNKNOWN") {
            location.replace("/500")
        } else {
            message.warning(data.msg)
        }
    }
    return data
}, error => {
    message.error(error.message)
    return Promise.reject(error)
})

export default axiosInstance
