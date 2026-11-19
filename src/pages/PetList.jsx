import { useState } from "react";
import PetCard from "../components/PetCard";

function PetList({ pets, toggleAdopt }) {
    const [filter, setFilter] = useState("All");
    const shown = filter == "All" ? pets : pets.filter((p) => p.type === filter);

    return (
        <div>
            <h2>All Pets</h2>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option>All</option>
                <option>Dog</option>
                <option>Cat</option>
                <option>Rabbit</option>
                <option>Bird</option>
            </select>
            <div>{shown.map((p) => (
                <PetCard key={p.id} pet={p} toggleAdopt={toggleAdopt} />
            ))}
            </div>
        </div>
    );
}
export default PetList;