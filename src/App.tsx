import { useState } from "react"
import Guitars from "./components/Guitars"
import Header from "./components/Header"
import { Guitar } from "./data/interfaces/Guitar"
import { guitars as data } from './data/guitars';

const App = () => {
  const [guitars, setGuitars] = useState<Guitar[]>(data)

  return (
    <>
      <Header />
      <Guitars guitars={guitars} />
    </>
  )
}

export default App
