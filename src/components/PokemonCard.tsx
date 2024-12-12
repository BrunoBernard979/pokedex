const PokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];
// 
const PokemonCard: React.FC=() =>{
  const Pokemon = PokemonList[1];
// 
  return (
  <figure>
    {Pokemon.imgSrc ? (
        <img src={Pokemon.imgSrc} alt={Pokemon.name} />
      ) : (
        <p>???</p>
      )}

      <figcaption>{Pokemon.name}</figcaption>
  </figure>
  );
};
export default PokemonCard;