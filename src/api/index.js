// 导入基础api  axios
import axios from "../api/config"

//用户注册接口  post
export const login = (username, password) => axios({
    url: "/users/login",
    method: "post",
    data: {
        username,
        password
    }
})