export default function Garage1({ coches, tipos }) {
  console.log("GARAGE 1", coches, tipos);

  return (
    <ul>
      <h1>Este es el Garage de los dias {tipos}</h1>
      {coches.length > 0 ? (
        <p>En este garage hay {coches.length} coches.</p>
      ) : (
        <p>El garage está vacio.</p>
      )}
      {<h1> Los coches que puedes elegir son: </h1>}

      {coches.map((n) => (
        <li key={n}> {n}</li>
      ))}
    </ul>
  );
}
