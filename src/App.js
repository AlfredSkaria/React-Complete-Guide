import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Alfi', age: 24},
      {name: 'Alex', age: 22}
    ],
    otherState: 'Some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    console.log('Was clicked');
    //DON'T DO THIS
    //this.state.persons[0].name = 'Alfred Skaria';
    this.setState({
      persons:[
        {name: newName, age: 28},
        {name: 'Alfi', age: 24},
        {name: 'Alex', age: 25}
      ]
   })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons:[
        {name: 'Alfred', age: 28},
        {name: event.target.value, age: 24},
        {name: 'Alex', age: 25}
      ]
   })
  }



  togglePersonsHandler = () =>{
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  }

  render() {

    const style = {
      backgroundColor: 'white',
      color: 'black',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
        persons = (
          <div >
            {this.state.persons.map(person => {
              return <Person name={person.name} 
                             age={person.age}/>
            })}
            {/* <Person
              name={this.state.persons[0].name} 
              age ={this.state.persons[0].age}/>
            
            <Person 
              name={this.state.persons[1].name} 
              age ={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Anil Skaria')}
              changed={this.nameChangedHandler}> My Hobbies : racing</Person>
            
            <Person 
              name={this.state.persons[2].name} 
              age ={this.state.persons[2].age}/> */}
          </div>
        );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a react app !!!</h1>
        <p>This is working ....</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle persons</button>
        {persons}
      </div>
    );

    //return React.createElement('div', {className : 'App'}, React.createElement('h1', null, 'Hi, I\'m a react app !!' ))
  }
}

export default App;
