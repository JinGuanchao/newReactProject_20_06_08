/**
 * 作者：金冠超
 * 邮箱地址：jgc14115@163.com
 * 功能：请求拦截器
 * 时间：2020-6-16
**/
import axios from 'axios';
//第一步，创建实例
const service = axios.create({
    baseURL: process.env.REACT_APP_API,//通过不同环境连接到不同的.env文件，调用其中命名为REACT_APP_API的变量
    timeout: 1000,
    //headers: {'X-custom-Header':'foobar'}//请求头，此处删除
})
//第二步，请求拦截
service.interceptors.request.use(
    function(config){
        //发送请求前做什么
        console.log(process.env.NODE_ENV);//打印当前环境development test production
        return config;
    },function(error){
        //对请求错误时做什么
        return Promise.reject(error)
    }
)
//第三步，响应拦截
service.interceptors.response.use(
    function (response){
        //对响应数据做点什么
        return response
},
    function(error){
        //对相应错误做点什么
        return Promise.reject(error)
    }
)

export default service
