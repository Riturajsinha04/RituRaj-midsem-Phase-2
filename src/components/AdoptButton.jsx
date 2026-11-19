import React from "react";

const AdoptButton=({pet, toggleAdopt })=>{
    if (!pet.vaccinated){ 
        return <p>Vaccination Pending</p>
    }
    return(
        <button onClick={() => toggleAdopt(pet.id)}>{EventTarget.isAdopted ? "Cancel Adoption" : "Adopt"}</button>
    );
}
export default AdoptButton;
