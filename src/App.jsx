
import { useContext } from "react";
import "./App.css";
import AddProduct from "./components/AddProduct";
import AddUserComponent from "./components/AddUserComponent";
import { languageContext } from "./context/languageContext";

export default function App() {
  const {handleChangeLangguage} = useContext(languageContext);
  return (
  <>
    <select onChange={(e) => {
      handleChangeLangguage(e.target.value);
    }}>
      <option value="vi">Tiếng Việt</option>
      <option value="en">Tiếng Anh</option>
    </select>

    <button>Change Language</button>
    <AddUserComponent />
    <AddProduct />
  </>
  );
}





// const profiles = [
//   {
//     id: 1,
//     name: "Nguyễn Văn A",
//   },
//   {
//     id: 2,
//     name: "Nguyễn Văn B",
//   },
//   {
//     id: 3,
//     name: "Nguyễn Văn C",
//   },
//   {
//     id: 4,
//     name: "Nguyễn Văn D",
//   },
//   {
//     id: 5,
//     name: "Nguyễn Văn E",
//   },
//   {
//     id: 6,
//     name: "Nguyễn Văn F",
//   },
// ];

// export default function App() {
//   return (
//     <>
//       <div className="wrapper">
//         {profiles.map((profile) => {
//           // console.log(profile.name);
//           return <Profile key={profile.id} name={profile.name} />;
//         })}
//       </div>
//     </>
//   );
// }
