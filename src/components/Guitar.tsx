import { CartGuitar } from "../data/interfaces/CartGuitar"
import { Guitar } from "../data/interfaces/Guitar"
import { formatPriceToPen } from "../helpers"

interface Props {
  guitar: Guitar,
  cart: CartGuitar[],
  setCart: (cart: CartGuitar[]) => void
}

const GuitarItem: React.FC<Props> = ({ guitar, cart, setCart }) => {
  const { id, name, description, image, price } = guitar

  const handleClick = () => {
    const guitarExists = cart.some(guitarCart => guitarCart.id === guitar.id)
    if (guitarExists) {
      const cartUpdate = cart.map(guitarCart => guitarCart.id === guitar.id ? ({
        ...guitarCart,
        quantity: ++guitarCart.quantity
      }) : guitarCart)
      setCart(cartUpdate)
    } else {
      setCart([...cart, { ...guitar, quantity: 1 }])
    }
  }

  return (
    <div className="col-md-6 col-lg-4 my-4 row align-items-center">
      <div className="col-4">
        <img className="img-fluid" src={`/img/${image}.jpg`} alt="imagen guitarra" />
      </div>
      <div className="col-8">
        <h3 className="text-black fs-4 fw-bold text-uppercase">{ name }</h3>
        <p>{ description }</p>
        <p className="fw-black text-primary fs-3">{ formatPriceToPen(price) }</p>
        <button
          type="button"
          className="btn btn-dark w-100"
          onClick={handleClick}
        >Agregar al Carrito</button>
      </div>
    </div>
  )
}

export default GuitarItem