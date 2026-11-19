import PetCard from "../components/PetCard";

function Adopted({ pets, toggleAdopt }) {
    const adoptedPets = pets.filter((p) => p.isAdopted);
    const totalFee = adoptedPets.reduce((sum, p) => sum + p.adoptionFee, 0);

    return (
        <div>
            <h2>Adopted Pets</h2>
            {adoptedPets.length === 0 ? (
                <p>No pets adopted yet</p>
            ) : (
                <div>
                    <p>Total Adoption Fee: {totalFee}</p>
                    <div>
                        {adoptedPets.map((p) => (
                            <PetCard key={p.id} pet={p} toggleAdopt={toggleAdopt} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
export default Adopted;