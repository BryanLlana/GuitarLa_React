import { CartGuitar } from "../data/interfaces/CartGuitar"
import { Guitar } from "../data/interfaces/Guitar"
import GuitarItem from "./Guitar"

interface Props {
  guitars: Guitar[],
  cart: CartGuitar[],
  setCart: (cart: CartGuitar[]) => void
}

const Guitars: React.FC<Props> = ({ guitars, cart, setCart }) => {
  return (
    <main className="container-xl mt-5">
      <h2 className="text-center">Nuestra Colección</h2>

      <div className="row mt-5">
        { guitars.map(guitar => (
          <GuitarItem key={guitar.id} guitar={guitar} cart={cart} setCart={setCart} />
        ))}
      </div>
    </main>
  )
}

export default Guitars