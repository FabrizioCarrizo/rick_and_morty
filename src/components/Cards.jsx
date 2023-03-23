import Card from "./Card";
export default function Cards( {characters, onClose} ) {
  if (!characters || characters.length === 0) {
    return <div><h3>Please use the search bar to find a character...</h3></div>;
  }

  return characters.map((key) => (
    <Card
      key={key.id}
      id={key.id}
      name={key.name}g
      status={key.status}
      species={key.species}
      gender={key.gender}
      origin={key.origin.name}
      image={key.image}
      onClose={onClose}
    ></Card>
  ));
}
