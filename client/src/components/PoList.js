import { useEffect, useState } from "react"
import PoCard from "./PoCard"

const PoList = () => {
  const [pos, setPos] = useState([])

  useEffect(() => {
    fetch('/pos')
    .then(res => res.json())
    .then(poData => setPos(poData))
  },[])

  const renderPos = pos.map((po) => (
    <PoCard key={po.id} po={po}/>
  ))

  return (
    <div>
      {renderPos}
    </div>
  )
}

export default PoList