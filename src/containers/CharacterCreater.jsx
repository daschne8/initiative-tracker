import React from 'react';
import {v4 as uuidv4} from 'uuid';


export default class CharacterCreater extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      initiative: null,
      dexterity: null,
      name: null,
      portrait: null,
    }
  }

  handleChange(event){
    this.setState({[event.target.id]: event.target.id !== "name" ? parseInt(event.target.value) : event.target.value })
  }

  handleSubmit = () => {
    this.props.addChar({name: this.state.name,
      initiative: this.state.initiative,
      dexterity: this.state.dexterity,
      portrait: this.state.portrait,
      moved: false,
      uuid: uuidv4()})
  this.clearForm()
  }

clearForm(){
  this.setState({
    initiative: "",
    dexterity: "",
    name: "",
    portrait: "",
  })
}


  render(){
    return(
      <div>
        <label htmlFor="name">
          Name:
          <input type="text" id="name" value={this.state.name} onChange={(e) => this.handleChange(e)}/>
        </label><br/>
        <label htmlFor="initiative">
          Initiative:
          <input type="number" id="initiative" value={this.state.initiative} onInput={(e) => this.handleChange(e)}/>
        </label><br/>
        <label htmlFor="dexterity">
          Dexterity:
          <input type="number" id="dexterity" value={this.state.dexterity} onInput={(e) => this.handleChange(e)}/>
        </label><br/>
          <button onClick={this.handleSubmit}>Add Char</button>
      </div>
    )
  }
}
