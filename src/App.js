import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';
// import Radium, {StyleRoot} from 'radium';


// const StyledButton = styled.button`
//       background-color: ${props => props.alt ? 'red' : 'aquamarine'};
//       color: black;
//       font: inherit;
//       padding: 8px;
//       cursor: pointer;

//       &:hover{
//         background-color: ${props => props.alt ? 'orange' : 'lightgreen'};
//         color: white;
//       }`;

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

    // const style = {
    //   backgroundColor: '#7fffd4',
    //   color: 'black',
    //   font: 'inherit',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover':{
    //     backgroundColor: 'lightgreen',
    //     color: 'white'
    //   }
    // };

    let persons = null;

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

        // style.backgroundColor='red';
        // style[':hover'] = {
        //   backgroundColor: 'orange',
        //   color: 'white'
        // }
    }


    const classes = [];

    if(this.state.persons.length <=2 ){
      classes.push('red'); // classes will be red
    }

    if(this.state.persons.length <=1){
      classes.push('bold'); //classess = ['red','bold']
    }

    return (
      <div className="App">
        <h1>Hi, I'm a react app !!!</h1>
        <p className={classes.join(' ')}>This is working ....</p>

        <button className="button" onClick={this.togglePersonsHandler}>
          Toggle persons
        </button>
        {persons}
      </div>

    );

    //return React.createElement('div', {className : 'App'}, React.createElement('h1', null, 'Hi, I\'m a react app !!' ))
  }
}

export default App;
