import React from 'react'
import Character from '../components/Character'
import CharacterCreater from './CharacterCreater'
import {seedChars} from '../data/seed';


export default class CharacterHolder extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      charData: [],
    }
    this.prevChars = {}
  }

  // componentDidMount(){
  //   this.importData()
  // }

  // componentDidUpdate(){
  //   if (JSON.stringify(this.state.charData) === JSON.stringify(this.prevChars)) {
  //     this.prevChars = this.state.charData;
  //   }
  // }

  // importData(){
  //   this.setState({charData: seedChars})
  // }

  onTurnEnd = (uuid) => {
    const newData = [...this.state.charData]
    newData.find(char => char.uuid === uuid).moved = true
    this.setState({charData: newData})
  }

  removeChar = (uuid) => {
    this.setState({charData: this.state.charData.filter(char => char.uuid !== uuid)})
  }

  addChar = (stats) => {
    this.setState({charData: this.state.charData.concat([stats])})
  }

  resetTurn(){
    const newData = [...this.state.charData]
    newData.map(char => char.moved = false);
    this.setState({charData: newData})
  }

  sortChars = () => {
    console.log(this.state.charData);
    let orderedChars = this.state.charData.sort((a,b) => {
      const aModifier = a.moved ? 0 : -99;
      const bModifier = b.moved ? 0 : -99;
      return (b.initiative - bModifier) - (a.initiative - aModifier) || (b.dex - bModifier) - (a.dex - aModifier) }).map((char, i) =>
        <Character {...char} key={i} order={i} onTurnEnd={this.onTurnEnd} removeChar={this.removeChar}/>)
    return orderedChars
  }

  render(){
    return(
      <div className="character-holder">
        <div className="chars-div">
          <button onClick={() => this.resetTurn()}>Reset Turn</button>
          <table><tbody>
            {this.sortChars()}
          </tbody></table>
        </div>
        <CharacterCreater className="character-creater" addChar={this.addChar}/>
      </div>
    )
  }
}
