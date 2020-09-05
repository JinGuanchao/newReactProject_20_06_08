/**
 * 作者：金冠超
 * 邮箱地址：jgc14115@163.com
 * 功能：跨域配置
 * 时间：2020-6-16
**/
const {createProxyMiddleware}= require('http-proxy-middleware')

module.exports = function(app){
    app.use(createProxyMiddleware([process.env.REACT_APP_API],{
        //配置请求的服务器
        target:process.env.REACT_APP_BASE_URL,
        changeOrigin:true,
        pathRewrite:{
            [`^${[process.env.REACT_APP_API]}`]:"",
        }
    }))

    /**
     * 1.匹配到 devApi ，开始代理（target后的目的地）（/login是被调用处的url）
     * 2.pathRewrite中将'/devApi'替换成空（'/devApi/login/' 变为了 '/login/'）
     * 3.替换之后的地址变为 http://www.web-jshtml.cn/api/react/login/（target地址+/login/）
     * 
     */
    // app.use(proxy('/manage/api',{
    //     target:'http//admintest.happymmall.com:7000',
    //     changeOrigin:true,
    // }))
}