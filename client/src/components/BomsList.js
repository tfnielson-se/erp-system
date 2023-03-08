import { useEffect, useState } from "react"

const Bomslist = () => {
  const [boms, setBoms] = useState(null)

  useEffect(() => {
    fetch('/boms')
    .then(res => res.json())
    .then(bomsData => setBoms)
  },[])

  return (
    <div> Boms List </div>
  )
}

export default Bomslist