import UserInput from "./UserInput";

export default function AddProduct() {
    

      const handleShowProduct = (userInput) => {
            alert(userInput);
      }

      return (
            <>
                  <UserInput onAddNewUser={handleShowProduct} 
                  buttonContent="Show product"/>
            </>
      )
}
