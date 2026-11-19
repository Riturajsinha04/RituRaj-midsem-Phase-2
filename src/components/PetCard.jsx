import { Link }  from "react-router";
import AdoptButton from "./AdoptButton"
import { formatAge, formatFee } from "../utils/helpers";

function PetCard({pet, toggleAdopt }){
    return (
        <div>
            <h1>{pet.emoji}</h1>
            <h3>{pet.name}</h3>
            <p>Type: {pet.type}</p>
            <p>Breed: {pet.breed}</p>
            <p>Age: {formatAge(pet.ageMonths)}</p>
            <p>{pet.vaccinated ? "Vaccinated" : "Vaccination Pending"} </p>
            <p>Fee: {formatFee(pet.adoptionFee)}</p>
            <AdoptButton pet={pet} toggleAdopt={toggleAdopt} />
            <br />
            <Link to={"/pets/" + pet.id}>View Details</Link>
        </div>
    );
}
export default PetCard;