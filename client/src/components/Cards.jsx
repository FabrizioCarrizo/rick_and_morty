import Card from "./Card";



export default function Cards( {characters, onClose, handleFav} ) {
  if (!characters || characters.length === 0) {
    return <div className="Message"><h3>Please use the search bar to find a character...</h3></div>;
  }

  
console.log('characters in CARDS-->',characters)
  return characters.map((key) => (
    <Card 
      key={key.id}
      id={key.id}
      name={key.name}
      status={key.status}
      species={key.species}
      gender={key.gender}
      origin={key.origin.name}
      image={key.image}
      onClose={onClose}
      handleFav={handleFav}
    ></Card>
  ));
}
