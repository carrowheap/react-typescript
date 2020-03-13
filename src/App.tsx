import React,{Component} from 'react';
import Count from './Count';

interface Props{}

interface State {
  greeting: string
}

export default class App extends Component {
  
 state: State = {
   greeting: 'hello react typescript'
 }

 render() {
    return (
      <div className="App">
          <Count greeting={this.state.greeting}/>
      </div>
    );
 }
}
