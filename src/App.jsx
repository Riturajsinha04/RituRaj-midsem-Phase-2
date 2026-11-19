import { useState } from "react";
import { BrowserRouter, Routes, Route, Link} from "react-router";
import initialPets from "./data/pets";
import Home from "./pages/Home";
import PetList from "./pages/PetList";
import PetDetails from "./pages/PetDetails";
import Adopted from "./pages/Adopted";

function App() {
  const [pets, setPets] = useState(initialPets);

  function toggleAdopt(id) {
    setPets(pets.map((p) => (p.id === id ? { ...p, isAdopted: !p.isAdopted }: p)));
  }

  return(
    <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/pets">Pets</Link>
      <Link to="/adopted">Adopted</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home pets={pets}/>}/>
        <Route path="/pets" element={<PetList pets={pets} toggleAdopt={toggleAdopt}/>}/>
        <Route path="/pets/:id" element={<PetDetails pets={pets} toggleAdopt={toggleAdopt}/>}/>
        <Route path="/adopted" element={<Adopted pets={pets} toggleAdopt={toggleAdopt} />}/>
      </Routes>
      </BrowserRouter>
  )
}
export default App;