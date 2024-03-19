import { CartGuitar } from "../data/interfaces/CartGuitar"
import ShoppingCart from "./ShoppingCart"

interface Props {
  cart: CartGuitar[]
}

const Header: React.FC<Props> = ({ cart }) => {
  return (
    <header className="py-5 header">
      <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">
          <div className="col-8 col-md-3">
            <a href="index.html">
              <img className="img-fluid" src="/img/logo.svg" alt="imagen logo" />
            </a>
          </div>
          <ShoppingCart cart={cart} />
        </div>
      </div>
    </header>
  )
}

export default Header