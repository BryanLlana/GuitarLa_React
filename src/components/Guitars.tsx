import { Guitar } from "../data/interfaces/Guitar"
import GuitarItem from "./Guitar"

interface Props {
  guitars: Guitar[]
}

const Guitars: React.FC<Props> = ({ guitars }) => {
  return (
    <main className="container-xl mt-5">
      <h2 className="text-center">Nuestra Colección</h2>

      <div className="row mt-5">
        { guitars.map(guitar => (
          <GuitarItem guitar={guitar} />
        ))}
      </div>
    </main>
  )
}

export default Guitars