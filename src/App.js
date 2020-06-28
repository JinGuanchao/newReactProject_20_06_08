import React from 'react'
import { Route, Switch, HashRouter} from 'react-router-dom'
import Index from './router/Index'


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
                    </Switch>
                  </HashRouter>
        </div>
    )
  }
}

export default App;
