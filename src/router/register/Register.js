/**
 * 作者：金冠超
 * 邮箱地址：jgc14115@163.com
 * 功能：注册页
 * 时间：2020-6-16
**/
import React,{Component,Fragment} from 'react'
import { Form, Input, Button, Row, Col,message} from 'antd'
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import {validate_password_message, validate_password} from '../../utils/vaildate';
//引入接口api
import {RegisterApi,GetCodeApi} from '../../api/account'
//引入密码加密
import CryptoJs from 'crypto-js'
const FormItem=Form.Item




class Register extends Component{
    constructor(props){
        super(props)
        this.state={
            userName:'',//用户名
            passWord:'',//密码
            keyWord:'',//验证码
            keyWordLoading:false,
            keyWordText:'获取验证码',
            keywordAbsolution:false,
        }
    }

    //表单提交事件
    onFinish=(values)=>{
        let postData={
            username:this.state.userName,
            password:CryptoJs.MD5(this.state.passWord).toString(),
            code:this.state.keyWord
        }
        RegisterApi(postData).then(response =>{
               if( response.data.resCode==0){
                    message.success(response.data.message)
                    this.props.changeForm('login')
               }else{
                message.info(response.data.message)
               }
        }).catch(error=>{
            message.error('服务异常')
        })
    }


    //获取验证码
    getCode=(value)=>{
        this.setState({
            keyWordLoading:true,
            keywordAbsolution:true,
            keyWordText:'获取中'
        })
        const postData={
            username:this.state.userName,
            module:value
        }
        GetCodeApi(postData).then(respone=>{
            this.countDown()
            message.info(respone.data.message)
        }).catch(error=>{
        this.setState({
            keyWordLoading:false,
            keyWordText:'重新获取验证码'
        })
            message.error('服务异常')
        })
}

    //输入框变化
    inputChange=(value,key)=>{
        this.setState({[key]:value.target.value})
    }
    //倒计时
    countDown = () =>{
        let timer=null;
        let sec='60';
        this.setState({
            keyWordLoading:false,
            keywordAbsolution:true,
            keyWordText:`${sec}S`
        })
        timer=setInterval(() => {
            sec--
            if(sec<=0){
                this.setState({
                    keyWordText:'重新获取',
                    keywordAbsolution:false,
                })
                clearInterval(timer);
                return false
            }
            this.setState({
                keyWordText:`${sec}S`
            })
        },1000)
    }

    render(){
        return(
                <Fragment>
                    <div className='form-header'>
                        <h4 className='column'>账号注册</h4>
                            <span onClick={()=>{this.props.changeForm('login')}}><a>使用已有账号登录</a></span>
                    </div>
                    <div >
                        <Form 
                            name="normal_login"
                            className="login-form"
                            onFinish={this.onFinish}
                            >
                            <FormItem
                                name='username'
                                rules={[
                                    {
                                        required:true,
                                        message:'用户名必填',
                                        },{
                                            type:"email",
                                            message:'用户名格式为邮箱格式'
                                        }
                                    ]}
                            >
                                <Input prefix={<UserOutlined/>} placeholder='请输入用户名 ' onChange={(value)=>this.inputChange(value,'userName')}/>
                            </FormItem>
                            <FormItem
                                name='password'
                                rules={[
                                    {
                                        required:true,
                                        pattern:validate_password,
                                        message:validate_password_message
                                    }
                                    ]}
                            >
                                <Input.Password prefix={<LockOutlined/>}  placeholder='请输入密码 ' onChange={(value)=>this.inputChange(value,'passWord')}/>
                            </FormItem>
                            <FormItem
                                name='rePassword'
                                rules={[
                                    {
                                        required:true,
                                        message:'必填',
                                    },({getFieldValue})=>({
                                        validator(rule,value){
                                            if(value === getFieldValue('password')){
                                                return Promise.resolve()
                                            }
                                            if(value!=''){
                                                return Promise.reject('两次密码输入不同')
                                                   }
                                                return Promise.reject()
                                        }
                                    })
                                    ]}
                            >
                                <Input.Password prefix={<LockOutlined/>}  placeholder='再次输入密码 ' onChange={(value)=>this.inputChange(value,'keyWord')}/>
                            </FormItem>
                            {/* <Row gutter={13}>
                                <Col span={15}>
                                    <FormItem
                                        name='keyWord'
                                        rules={[
                                            {
                                                required:true,
                                                message:'验证码必填',
                                                }
                                            ]}
                                    >
                                        <Input placeholder='请输入验证码 '/>
                                    </FormItem>
                                </Col>
                                <Col span={9}>
                                    <Button type='danger' block>获取验证码</Button>
                                </Col>
                            </Row> */}
                            <Row gutter={13}>
                                <Col span={15}>
                                    <FormItem
                                        name='keyWord'
                                        rules={[
                                            {
                                                required:true,
                                                message:'验证码必填',
                                                }
                                            ]}
                                    >
                                        <Input placeholder='请输入验证码 ' onChange={(value)=>this.inputChange(value,'keyWord')}/>
                                    </FormItem>
                                </Col>
                                <Col span={9}>
                                    <Button 
                                        type='danger' 
                                        block 
                                        style={this.state.keywordAbsolution?{backgroundColor:'yellow',color:'black'}:{}}
                                        onClick={()=>{this.getCode('register')}} 
                                        disabled={this.state.userName==''||this.state.keywordAbsolution} 
                                        loading={this.state.keyWordLoading}
                                        >{this.state.keyWordText}</Button>
                                </Col>
                            </Row>
                            <FormItem >
                                <Button type="primary" htmlType="submit"  className='Button-success' block>注册</Button>
                            </FormItem>
                        </Form>
                    </div>
                </Fragment>
        )
    }
}
export default Register