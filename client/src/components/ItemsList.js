import { useEffect, useState } from "react"
import ItemsRow from "./ItemsRow"
import FormNewItem from "./FormNewItem"

const ItemsList = () => {
  const [items, setItems] = useState(null)
  // console.log(items)

  useEffect(() => {
    fetch('/items')
    .then(res => res.json())
    .then(itemsData => setItems(itemsData))
  },[])
  // console.log(items)
  if(!items) return <h1>Loading...</h1>

  const deleteItem = (itemId) => {
    const itemsAfterDelete = items.filter(item => {
      if (item.id !== itemId) {
        return item
    }})
    setItems(itemsAfterDelete)
  }

  const addNewItem = (newItem) => (
    setItems([...items, newItem])  )

  const renderItems = items.map((item) => (
    <ItemsRow key={item.id} item={item} onDeleteItem={deleteItem} />
  ))

  return (
    <section className="container px-4 mx-auto mt-5">
    <div className="flex flex-col">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 px-4 text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400"
                  >

                        <span>ID #</span>

                  </th>

                  <th
                    scope="col"
                    className="px-4 py-3.5 text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400"
                  >
                    Description
                  </th>

                  <th
                    scope="col"
                    className="px-4 py-3.5 text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400"
                  >
                    Material
                  </th>

                  <th
                    scope="col"
                    className="px-4 py-3.5 text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400"
                  >
                    Price
                  </th>

                  <th
                    scope="col"
                    className="px-4 py-3.5 text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400"
                  >
                    Vendor
                  </th>

                  <th
                    scope="col"
                    className="px-4 py-3.5 text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400"
                  >
                  Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                <FormNewItem onAddNewItem={addNewItem}/>
                {renderItems}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
export default ItemsList