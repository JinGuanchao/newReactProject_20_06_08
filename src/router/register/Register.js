/**
 * 作者：金冠超
 * 邮箱地址：jgc14115@163.com
 * 功能：注册页
 * 时间：2020-6-16
**/
import React,{Component,Fragment} from 'react'
import { Form, Input, Button, Row, Col} from 'antd'
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import {validate_password_message, validate_password} from '../../utils/vaildate';


const FormItem=Form.Item




class Register extends Component{
    constructor(props){
        super(props)
        this.state={}
    }
    onFinish=(values)=>{
        console.log(values)
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
                                        }
                                    ]}
                            >
                                <Input prefix={<UserOutlined/>} placeholder='请输入用户名 '/>
                            </FormItem>
                            <FormItem
                                name='email'
                                rules={[
                                    {
                                        required:true,
                                        message:'邮箱必填',
                                    },{
                                        type:"email",
                                        message:'格式错误'
                                    }
                                    ]}
                            >
                                <Input prefix={<MailOutlined />} placeholder='请输入邮箱 '/>
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
                                <Input.Password prefix={<LockOutlined/>}  placeholder='请输入密码 '/>
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
                                            return Promise.reject('两次密码输入不同')
                                        }
                                    })
                                    ]}
                            >
                                <Input.Password prefix={<LockOutlined/>}  placeholder='再次输入密码 '/>
                            </FormItem>
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
                                        <Input placeholder='请输入验证码 '/>
                                    </FormItem>
                                </Col>
                                <Col span={9}>
                                    <Button type='danger' block>获取验证码</Button>
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