import React,{Component} from 'react'
import './index.scss'
import Login from './login/Login'
import Register from './register/Register'

class Index extends Component{
    constructor(props){
        super(props)
        this.state={
            formType:'login'
        }
    }
    changeForm=(value)=>{
        this.setState({formType:value});
    }

    render(){
        return(
            <div className='index-globa'>
                <div className='form-warp'>
                    <div>
                        {this.state.formType === 'login'
                        ?
                        <Login changeForm={this.changeForm}/>
                        :
                        <Register changeForm={this.changeForm}/>
                        }
                    </div>
            </div>
           </div>
        )
    }
}
export default Index