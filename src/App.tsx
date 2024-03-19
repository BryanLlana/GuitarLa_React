import { useState } from "react";
import Footer from "./components/Footer";
import Guitars from "./components/Guitars"
import Header from "./components/Header"
import { guitars } from './data/guitars';
import { CartGuitar } from "./data/interfaces/CartGuitar";

const App = () => {
  const [cart, setCart] = useState<CartGuitar[]>([])

  return (
    <>
      <Header cart={cart} />
      <Guitars guitars={guitars} cart={cart} setCart={setCart} />
      <Footer />
    </>
  )
}

export default App
