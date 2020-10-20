// 定义基础的api





// 引入axios
import axios from "axios"
//定义服务器的基础地址
//axios.defaults.baseURL = "/api"
// 判断环境是否是开发环境 是就/api 不是就变会原地址
axios.defaults.baseURL = process.env.NODE_ENV == 'development' ? "/api" : "http://www.chst.vip"

// 定义默认携带认证,这句话开启之后,才可以将浏览器的cookie携带给服务器,服务器也可以对浏览器进行cookie设置
axios.defaults.withCredentials = true

//创建请求拦截器， 可以给每个请求都携带上想要传递的内容
//能够拦截所有请求
axios.interceptors.request.use(config => {
    console.log(config); //config就是我们的所有请求
})


// 设置请求事件//超过4秒就不能访问了
axios.create({
    timeout: 4000
})

//导出axios
export default axios