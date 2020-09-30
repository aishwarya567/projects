import React , {Component} from 'react';
import logo from './logo.svg';
import {CardList} from './components/card-list/card-list.components';
import './App.css';
import {SearchEngine} from './components/search-box/search-box.components';
// App function Component
class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters : [],
      searchField : ''
    };
    
  }
  

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters : users}));
}
onSearchChange = event => {
  this.setState({ searchField: event.target.value });
};
  render(){
    const { monsters,searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return(
      <div className="App">
        <h1>Monsters Ruler</h1>
        <SearchEngine onSearchChange = {this.onSearchChange} />
             <CardList monsters = {filteredMonsters}/>
    </div>
    );
  }
}

export default App;
