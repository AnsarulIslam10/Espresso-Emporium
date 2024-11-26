import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./components/CoffeeCard"
import { useState } from "react"

function App() {
  const loadedCoffees = useLoaderData()
  const [coffees, setCoffees] = useState(loadedCoffees)
  return (
    <>
      <h1 className='text-4xl font-bold text-center'>Espresso Emporium</h1>
      <h3>Coffees {coffees.length}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {
        coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
      }
      </div>
    </>
  )
}

export default App
