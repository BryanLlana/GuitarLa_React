import Guitars from "./components/Guitars"
import Header from "./components/Header"
import { guitars } from './data/guitars';

const App = () => {

  return (
    <>
      <Header />
      <Guitars guitars={guitars} />
    </>
  )
}

export default App
