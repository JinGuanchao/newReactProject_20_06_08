/**
 * 作者：金冠超
 * 邮箱地址：jgc14115@163.com
 * 功能：验证相关公有组件
 * 时间：2020-6-16
**/
// 密码格式正则验证
export const validate_password=/^(?![^a-zA-Z]+$)(?!\D+$)(?![a-zA-Z0-9]+$).{6,12}$/
export const validate_password_message='密码长度为6-12位，必须同时包含数字，字母，特殊字符' 
