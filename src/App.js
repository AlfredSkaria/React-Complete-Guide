import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import classes from './App.css'
// import styled from 'styled-components';
// import Radium, {StyleRoot} from 'radium';


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
    let btnClass = [classes.Button];

    if (this.state.showPersons) {
        persons = (
          <div >
            {this.state.persons.map((person, index) => {
              return <Person 
                      click={ () => this.deletePersonHandler(index)}
                      name={person.name} 
                      age={person.age}
                      key={person.id}
                      changed={(event) => this.nameChangedHandler(event, person.id)}/>
            })}
          </div>
        );

        btnClass.push(classes.Red);
    }


    const assignedClasses = [];

    if(this.state.persons.length <=2 ){
      assignedClasses.push(classes.red); // assignedClasses will be red
    }

    if(this.state.persons.length <=1){
      assignedClasses.push(classes.bold); //assignedClassess = ['red','bold']
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a react app !!!</h1>
        <p className={assignedClasses.join(' ')}>This is working ....</p>

        <button className={btnClass.join(' ')} onClick={this.togglePersonsHandler}>
          Toggle persons
        </button>
        {persons}
      </div>

    );

    //return React.createElement('div', {className : 'App'}, React.createElement('h1', null, 'Hi, I\'m a react app !!' ))
  }
}

export default App;
