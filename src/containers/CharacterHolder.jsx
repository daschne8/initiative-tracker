import React from 'react'
import Character from '../components/Character'

export default function CharacterHolder(props){
  let orderedChars = props.props.sort((a,b) => {
    const aModifier = a.moved ? 0 : -99;
    const bModifier = b.moved ? 0 : -99;
    return (a.initiative - aModifier) - (b.initiative - bModifier) || (a.dex - aModifier) - (b.dex - bModifier) }).map((char) => <Character {...char}/>)
  return(
    <table><tbody>
      {orderedChars}
    </tbody></table>
  )
}
