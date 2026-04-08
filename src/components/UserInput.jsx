import { useState } from "react";

export default function UserInput({onAddNewUser, buttonContent}) {
      const [userInput, setUserInput] = useState("");

      return (
            <div>
                  <input type="text" aria-label="Add new"
                        onChange={(e) => {
                              setUserInput(e.target.value);
                        }} />
                  <button onClick={() => {
                        onAddNewUser(userInput);
                  }}>{buttonContent}</button>
            </div>
      )
}
