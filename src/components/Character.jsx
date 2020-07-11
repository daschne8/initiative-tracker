import React, {useState, setState} from 'react'


const Character = props => {
  const [chars] = useState(props)

  const onTurnEnd = () => {
    setState({moved: true})
  }

  return(
    <tr class="character main">
      <td><img src="" alt={`Portrait: ${chars.name}`} class="portrait"/></td>
      <td><div>Name: {chars.name}</div>
      <div>Initiative: {chars.initiative}</div>
      <button onClick={onTurnEnd}>Done Turn</button>
      <button>Remove</button></td>
    </tr>
  )
}
export default Character;
