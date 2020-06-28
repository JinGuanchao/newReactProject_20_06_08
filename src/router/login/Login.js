/**
 * 作者：金冠超
 * 邮箱地址：jgc14115@163.com
 * 功能：登录页
 * 时间：2020-6-16
**/
import React,{Component,Fragment} from 'react'
import { Form, Input, Button, Row, Col} from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {validate_password_message, validate_password} from '../../utils/vaildate';
//引入接口api
import {LoginApi} from '../../api/account'
const FormItem=Form.Item




class Login extends Component{
    constructor(props){
        super(props)
        this.state={}
    }

    //表单提交事件
    onFinish=(values)=>{
        LoginApi().then(response =>{
            console.log(response)
        }).catch(error=>{
            console.log(error)
        })
    }

    render(){
        return(
                <Fragment>
                    <div className='form-header'>
                        <h4 className='column'>登录</h4>
                            <span onClick={()=>{this.props.changeForm('register')}}><a>账号注册</a></span>
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
                                name='password'
                                rules={[
                                    {
                                        required:true,
                                        pattern:validate_password,
                                        message:validate_password_message
                                    }
                                    ]}
                            >
                                <Input.Password prefix={<LockOutlined/>} type='password' placeholder='请输入密码 '/>
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
                            <FormItem>
                            <Button type="primary" htmlType="submit"  block>登录</Button>
                            </FormItem>
                        </Form>
                    </div>
                </Fragment>
        )
    }
}
export default Login