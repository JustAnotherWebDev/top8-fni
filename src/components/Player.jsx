import characters from "../data/characters.json"

const Player = (props) => {
  const { player, setPlayer } = props
  return (
    <>
      <input type="text" value={player.name} onChange={e => setPlayer({ ...player, name: e.target.value })} />
      <input type="text" value={player.social} onChange={e => setPlayer({ ...player, social: e.target.value })} />
      <select value={player.character} onChange={e => setPlayer({ ...player, character: e.target.value })}>
        {characters && characters.map(character => (
          <option key={character.id} value={character.id}>{character.name}</option>
        ))}
      </select>
    </>
  )
}

export default Player