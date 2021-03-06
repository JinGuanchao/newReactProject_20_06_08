/**
 * 作者：金冠超
 * 邮箱地址：jgc14115@163.com
 * 功能：集中管理api
 * 时间：2020-6-16
**/
import service from '../../src/utils/request'


//登录接口
export function LoginApi(data){
    return service.request({
        url:'/login/',
        method:'post',
        data,//请求类型为get时的写法
        // params:data,//请求类型为get的写法
    })
}

//验证码接口
export function GetCodeApi(data){
    return service.request({
        url:'/getSms/',
        method:'post',
        data,//请求类型为get时的写法
        // params:data,//请求类型为get的写法
    })
}

//注册接口
export function RegisterApi(data){
    return service.request({
        url:'/register/',
        method:'post',
        data
    })
}