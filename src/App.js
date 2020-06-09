import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import Home from './router/Home';
import About from './router/About';


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    return(
          <div className="App">
              <BrowserRouter>
                  {/* <HashRouter> */}
                    <Switch>
                      <Route exact component={About} path="/about"/>
                      <Route exact component={Home} path="/"/>
                    </Switch>
                  {/* </HashRouter> */}
                </BrowserRouter>
          {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              这里是 <code>React</code> 自有项目.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              血小板~
            </a>
          </header> */}
        </div>
    )
  }
}

export default App;
