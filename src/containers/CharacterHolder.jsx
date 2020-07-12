import React from 'react'
import Character from '../components/Character'
import {seedChars} from '../data/seed';


export default class CharacterHolder extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      charData: [],
      orderedChars: [],
    }
    this.prevState = {}
  }

  componentDidMount(){
    this.importData()
  }

  componentDidUpdate(){
    if (JSON.stringify(this.state.charData) !== JSON.stringify(this.prevState.charData)) {
      this.sortChars()
      this.prevState = this.state;
      console.log(this.state);
    }
  }

  importData(){
    this.setState({charData: seedChars})
  }

  onTurnEnd = (uuid) => {
    this.state.charData.find(char => char.uuid === uuid).moved = true;
  }

  sortChars = () => {
    let orderedChars = this.state.charData.sort((a,b) => {
      const aModifier = a.moved ? 0 : -99;
      const bModifier = b.moved ? 0 : -99;
      return (a.initiative - aModifier) - (b.initiative - bModifier) || (a.dex - aModifier) - (b.dex - bModifier) }).map((char, i) => <Character {...char} key={i} onTurnEnd={this.onTurnEnd}/>)
    this.setState({orderedChars: orderedChars})
  }

  render(){
    return(
      <table><tbody>
        {this.state.orderedChars}
      </tbody></table>
    )
  }
}
