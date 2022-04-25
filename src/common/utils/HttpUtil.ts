import Axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse, Method} from "axios";
import qs from "qs";
import {useAppSelector} from "../../hooks/reduxHook";

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
    //  todo 开启进度条

    //  每个请求携带 token
    const user = useAppSelector(state => state.user)
    if (user.token && config.headers) {
        config.headers["Authorization"] = user.token
    }

    return config
}, error => {
    console.log(error)
    return Promise.reject(error)
})

/**
 * 响应拦截器
 */
axiosInstance.interceptors.response.use((response: AxiosResponse) => {
    //  todo 关闭进度条

    const data = response.data
    if (data.code !== 200) {
        //  todo 处理错误
        console.log("data: ", data)
    }

    return data
}, error => {
    //  todo 关闭进度条

    //  todo 处理错误
    console.log(error)

    return Promise.reject(error)
})

/**
 * get 请求
 */
axiosInstance.get = (url: string, params?: any): Promise<any> =>
    axiosInstance({
        method: "get",
        url,
        params
    })

/**
 * post 请求
 */
axiosInstance.post = (url: string, data?: any): Promise<any> =>
    axiosInstance({
        method: "get",
        url,
        data
    })

export default axiosInstance
