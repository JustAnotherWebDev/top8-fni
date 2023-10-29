import { useState } from "react"
import players from "./data/players.json"
import Canvas from "./components/Canvas"
import Player from "./components/Player"

const App = () => {
  const [topLeft, setTopLeft] = useState("Fighters Network Italia - Torneo 3 Stagione 1")
  const [topRight, setTopRight] = useState("Design by: @FelixVentoAran")
  const [bottomLeft, setBottomLeft] = useState("MILANO, 20/10/2023")
  const [bottomRight, setBottomRight] = useState("challonge.com/fnisf6s1t3")
  const [color, setColor] = useState("#808080")

  const [first, setFirst] = useState(players[0])
  const [second, setSecond] = useState(players[1])
  const [third, setThird] = useState(players[2])
  const [fourth, setFourth] = useState(players[3])
  const [fifth, setFifth] = useState(players[4])
  const [sixth, setSixth] = useState(players[5])
  const [seventh, setSeventh] = useState(players[6])
  const [eigth, setEigth] = useState(players[7])

  return (
    <>
      <section className="flex flex-col justify-center items-center gap-2">
        <h1 className="flex justify-center items-center font-title text-2xl whitespace-nowrap">FNI - TOP 8 MAKER</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-2">
          <input type="text" value={topLeft} onChange={e => setTopLeft(e.target.value)} />
          <input type="text" value={topRight} onChange={e => setTopRight(e.target.value)} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 px-2">
          <input type="text" value={bottomLeft} onChange={e => setBottomLeft(e.target.value)} />
          <input type="text" value={bottomRight} onChange={e => setBottomRight(e.target.value)} />
          <input type="text" value={color} onChange={e => setColor(e.target.value)} />
        </div>
      </section>
      <section className="flex flex-col px-2">
        <div className="flex flex-col md:flex-row gap-2">
          <div id="control-panel-players" className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <Player player={first} setPlayer={setFirst} />
            <Player player={second} setPlayer={setSecond} />
            <Player player={third} setPlayer={setThird} />
            <Player player={fourth} setPlayer={setFourth} />
            <Player player={fifth} setPlayer={setFifth} />
            <Player player={sixth} setPlayer={setSixth} />
            <Player player={seventh} setPlayer={setSeventh} />
            <Player player={eigth} setPlayer={setEigth} />
          </div>
          <Canvas details={{topLeft, topRight, bottomLeft, bottomRight, color}} finalists={[first, second, third, fourth, fifth, sixth, seventh, eigth]} />
        </div>
      </section>
    </>
  )
}

export default App
