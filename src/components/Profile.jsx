export default function Profile({ name }) {
  console.log(name);
  return (
    <div className="container">
      <img
        src="https://i.pinimg.com/236x/07/f1/57/07f157bc778a4822fad5f9b4a86e0758.jpg"
        alt="Avatar"
        width={120}
        height={120}
      />
      <h3>{name}</h3>
      <button className="visit-profile">Visit Profile</button>
    </div>
  );
}