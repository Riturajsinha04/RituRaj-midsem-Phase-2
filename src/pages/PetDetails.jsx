import { useParams, Link } from "react-router";
import AdoptButton from "../components/AdoptButton";
import { formatAge, formatFee } from "../utils/helpers";

function PetDetails({ pets, toggleAdopt }) {
    const { id } = useParams();
    const pet = pets.find((p) => p.id === Number(id));

    if(!pet) return <h2>Pet Not Found</h2>;

    return(
        <div>
            <h2>{pet.emoji} {pet.name}</h2>
            <p>Type: {pet.type}</p>
            <p>Breed: {pet.breed}</p>
            <p>Age: {formatAge(pet.ageMonths)}</p>
            <p>Gender: {pet.gender}</p>
            <p>Vaccination Status: {pet.vaccinated ? "Vaccinated" : "Vaccination Pending"}</p>
            <p>Adoption Fee: {formatFee(pet.adoptionFee)}</p>
            <AdoptButton pet={pet} toggleAdopt={toggleAdopt}/>
            <br />
            <Link to="/pets/">← Back to pets</Link>
        </div>
    );
}
export default PetDetails;