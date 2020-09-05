/**
 * 作者：金冠超
 * 邮箱地址：jgc14115@163.com
 * 功能：首页
 * 时间：2020-09-05
**/
import React ,{Component} from 'react';
import {Layout,Menu} from 'antd'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import './Home.scss'
const {Sider,Header,Content,Footer} = Layout;
const {SubMenu} = Menu;
export default class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            titleGreet:''
        }
    }
    componentDidMount(){
        this.timer=setInterval(this.getTime, 1000);
    }

    componentWillMount(){
        clearInterval(this.getTime)
    }

    getTime = ()=>{
        let today=new Date()
        let year= today.getFullYear()
        let month= today.getMonth()
        let date= today.getDate()
        let weekArry = new Array("日", "一", "二", "三", "四", "五", "六");  
        let week = today.getDay(); 
        let Hours=today.getHours()
        let Minutes= (today.getMinutes()<10)?'0'+today.getMinutes():today.getMinutes()
        let Seconds= today.getSeconds()<10?'0'+today.getSeconds():today.getSeconds()
        let greetWord= ''
        if(Hours<5){greetWord='凌晨好'}
        else if(Hours<11){greetWord='上午好'}
        else if(Hours<14){greetWord='中午好'}
        else if(Hours<19){greetWord='下午好'}
        else{greetWord='晚上好'}
        let titleGreet=`${greetWord}，今天是${year}年${month}月${date}日 星期${weekArry[week]} 现在是${Hours}点${Minutes}分${Seconds}秒`
        this.setState({
            titleGreet
        })
    }
    render(){

        return (
            <Layout className='cd_bg'>
                    <Sider>
                        <div style={{height:'70px'}}></div>
                        <Menu
                            theme='dark'
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            className='left-menu'
                            >
                            <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                                <Menu.Item key="1" className='menu-item'>option1</Menu.Item>
                                <Menu.Item key="2" className='menu-item'>option2</Menu.Item>
                                <Menu.Item key="3" className='menu-item'>option3</Menu.Item>
                                <Menu.Item key="4" className='menu-item'>option4</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                                <Menu.Item key="5">option5</Menu.Item>
                                <Menu.Item key="6">option6</Menu.Item>
                                <Menu.Item key="7">option7</Menu.Item>
                                <Menu.Item key="8">option8</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                                <Menu.Item key="9">option9</Menu.Item>
                                <Menu.Item key="10">option10</Menu.Item>
                                <Menu.Item key="11">option11</Menu.Item>
                                <Menu.Item key="12">option12</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                <Layout>
                    <Header className='header_bg'>{this.state.titleGreet} </Header>
                    <Content className='content_bg'>具体内容</Content>
                    <Footer className='footer_bg'>底注</Footer>
                </Layout>
            </Layout>
        )
    }
}