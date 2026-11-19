function Home({ pets }){
    const total = pets.length;
    const ready = pets.filter((p) => p.vaccinated && !p.isAdopted).length;
    const adopted = pets.filter((p) => p.isAdopted).length;

    return(
        <div>
            <h2>Home</h2>
            <p>Total Pets: {total}</p>
            <p>Ready for Adoption: {ready}</p>
            <p>Adopted Pets: {adopted}</p>
        </div>
    );
}
export default Home;