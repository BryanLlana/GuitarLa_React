import { useMemo } from "react"
import { CartGuitar } from "../data/interfaces/CartGuitar"
import { formatPriceToPen } from "../helpers"

interface Props {
  cart: CartGuitar[],
  setCart: (cart: CartGuitar[]) => void
}

const ShoppingCart: React.FC<Props> = ({ cart, setCart }) => {
  const totalCart = useMemo(() => cart.reduce((total, guitarCart) => (guitarCart.quantity * guitarCart.price) + total  , 0), [cart])
  const MAX_ITEM = 5
  const MIN_ITEM = 1

  const decrementQuantity = (id: number) => {
    const cartUpdate = cart.map(guitarCart => {
      if (guitarCart.id === id) {
        if (guitarCart.quantity > MIN_ITEM) {
          guitarCart.quantity = --guitarCart.quantity
          return guitarCart
        }
      }
      return guitarCart
    })
    setCart(cartUpdate)
  }

  const incrementQuantity = (id: number) => {
    const cartUpdate = cart.map(guitarCart => {
      if (guitarCart.id === id) {
        if (guitarCart.quantity < MAX_ITEM) {
          guitarCart.quantity = ++guitarCart.quantity
          return guitarCart
        }
      }
      return guitarCart
    })
    setCart(cartUpdate)
  }

  const deleteGuitarCart = (id: number) => {
    const cartUpdate = cart.filter(guitarCart => guitarCart.id !== id)
    setCart(cartUpdate)
  }

  return (
    <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
      <div className="carrito">
        <img className="img-fluid" src="/img/carrito.png" alt="imagen carrito" />

        <div id="carrito" className="bg-white p-3">
          {cart.length === 0 ?
              <p className="text-center">El carrito esta vacio</p>
            : (
              <>
                <table className="w-100 table">
                  <thead>
                    <tr>
                      <th>Imagen</th>
                      <th>Nombre</th>
                      <th>Precio</th>
                      <th>Cantidad</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map(guitarCart => (
                      <tr key={guitarCart.id}>
                        <td>
                          <img className="img-fluid" src={`/img/${guitarCart.image}.jpg`} alt="imagen guitarra" />
                        </td>
                        <td>{guitarCart.name}</td>
                        <td className="fw-bold">
                          {formatPriceToPen(guitarCart.price)}
                        </td>
                        <td className="flex align-items-start gap-4">
                          <button
                            type="button"
                            className="btn btn-dark"
                            onClick={() => decrementQuantity(guitarCart.id)}
                          >
                            -
                          </button>
                          {guitarCart.quantity}
                          <button
                            type="button"
                            className="btn btn-dark"
                            onClick={() => incrementQuantity(guitarCart.id)}
                          >
                            +
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger"
                            type="button"
                            onClick={() => deleteGuitarCart(guitarCart.id)}
                          >
                            X
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-end">Total pagar: <span className="fw-bold">{ formatPriceToPen(totalCart) }</span></p>
                <button className="btn btn-dark w-100 mt-3 p-2">Vaciar Carrito</button>
              </>
            )}

        </div>
      </div>
    </nav>
  )
}

export default ShoppingCart