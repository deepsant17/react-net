import React,{Component} from 'react';
import './App.css';
import {CardList} from './Components/card-list/card-list.component';
import SearchBox from './Components/search-box/search-box.component';
class App extends Component{
  
  constructor(){
    super();
 this.state= {avtars:[],searchField:''}
}
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users').then(res=>
    res.json()
  ).then(users=>
     this.setState({avtars:users})
  )

}
  render(){

  const {avtars,searchField}=this.state;
  const filterdAvtars=avtars
  .filter(avtar => avtar.name.toLowerCase()
  .includes(searchField.toLowerCase()));

  return (<div className="App">
  <SearchBox placeholder='Search Avtar' handlechange={e=>this.setState({searchField:e.target.value})}/>
   <CardList avtars= {filterdAvtars}/>
  
   </div>
  )
 
}
}

export default App;
