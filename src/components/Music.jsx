export default function Music({name, img}) {
  return (
    <div className="container">
      <img src={img} alt="IMG" /> 
      <h3>{name}</h3>
    </div>
  );
}
