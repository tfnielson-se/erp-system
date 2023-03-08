import { useEffect, useState } from "react"

const ItemsList = () => {
  const [items, setItems] = useState(null)

  useEffect(() => {
    fetch('/items')
    .then(res => res.json())
    .then(itemsData => setItems)
  },[])
  console.log(items)
  
  return (
    <div>
      render Items
    </div>
  )
}
export default ItemsList