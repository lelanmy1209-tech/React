import { useState } from "react";
import UserInput from "./UserInput";
import UserList from "./UserList";

const users = [
  {
    id: 1,
    name: "Nguyễn Văn A",
  },
  {
    id: 2,
    name: "Lê Văn B",
  },
  {
    id: 3,
    name: "Phạm Văn C",
  },
];


export default function AddUserComponent() {
      const [userList, setUserList] = useState(users);

      const handleAddNewUser = (userInput) => {
            setUserList((prev) => [...prev, { id: userList.length + 1, name: userInput }])
      }

      return (
            <>
                  <UserInput onAddNewUser={handleAddNewUser}  buttonContent="Thêm mới"/>
                  <UserList userList={userList} />
            </>
      )
}
