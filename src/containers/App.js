import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import classes from './App.css'


class App extends Component {

  state = {
    persons: [
      {id: '100', name: 'Max', age: 28},
      {id: '101', name: 'Alfi', age: 24},
      {id: '102', name: 'Alex', age: 22}
    ],
    otherState: 'Some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const newPerson = {
      ...this.state.persons[personIndex]
    };

   // const person = Object.assign({}, this.state.persons[personIndex]);  ///Alternative approach / traditional way

    newPerson.name = event.target.value;

    const newPersons = [...this.state.persons];
    newPersons[personIndex] = newPerson;

    this.setState({persons: newPersons});
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice(); 
    const persons = [...this.state.persons];  // ES6 approach
    let deletedItems = persons.splice(personIndex, 1);
    console.log(deletedItems);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () =>{
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  }

  render() {

    let persons = null;


    if (this.state.showPersons) {
        persons = (
            <Persons  
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}/>
        );

    }
    return (
      <div className={classes.App}>
        <Cockpit  
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}/>
        {persons}
      </div>

    );

    //return React.createElement('div', {className : 'App'}, React.createElement('h1', null, 'Hi, I\'m a react app !!' ))
  }
}

export default App;
