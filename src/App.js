import React from 'react'
import { Route, Switch, HashRouter} from 'react-router-dom'
import Index from './router/Index'
import Home from './router/Home/Home'


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    return(
          <div className="App">
                  <HashRouter>
                    <Switch>
                      <Route exact component={Index} path="/"/>
                      <Route exact component={Home} path="/Home"/>
                    </Switch>
                  </HashRouter>
        </div>
    )
  }
}

export default App;
