import UserProfile from "./UserProfile";
export default function UserList({ userList }) {
      // console.log(userList);
      // const {id,name} = userList;
      return (
            <div>
                  {userList.map((user) => {
                        const { id, name } = user;
                        return <UserProfile key={id} id={id} name={name} />
                  })}

            </div>
      )
}
