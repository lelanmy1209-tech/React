import "./App1.css";
import CourseItem from "../components/CourseItem";

const courses = [
  {id: 1,
    name: "REACTJS",
  },
  {
    id: 2,
    name: "NODEJS",
  },
  {
    id: 3,
    name: "MONGODB",
  },
];


export default function App1() {
  return (
    <div>
      <div className="Course">
        {courses.map((course) => {
          return <CourseItem key={course.id} name={course.name} />;
        })}
      </div>
    </div>
  );
}
