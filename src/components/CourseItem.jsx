export default function CourseItem(props) {
  return (
    <div className="container">
      <h3>{props.name}</h3>
      <button className="register"> Course Registration</button>
    </div>
  );
}
