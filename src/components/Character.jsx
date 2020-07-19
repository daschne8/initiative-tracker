import React, {component} from 'react'


export default class Character extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }


  render(){
    return(
      <tr class="character main">
        <td><img src="" alt={`Portrait: ${this.props.name}`} class="portrait"/></td>
        <td><div>Name: {this.props.name}</div>
        <div>Initiative: {this.props.initiative}</div>
        <button onClick={(uuid) => this.props.onTurnEnd(this.props.uuid)} disabled={this.props.order !== 0}>Done Turn</button>
        <button onClick={(uuid) => this.props.removeChar(this.props.uuid)}>Remove</button></td>
      </tr>
    )
  }
}
