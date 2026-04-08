import { useState } from "react"

export default function ToggleMessage() {
      const [isVisible, setlsVisible] = useState(false);
      
      const handleChangeVisible = () => {
            setlsVisible(!isVisible);
      };

  return (
    <div>
      <h1 className="toggle">Toggle Message</h1>
      <button className="btn" onClick= {handleChangeVisible}>{isVisible ? "Hide Message" : "Show Message"}</button>
      {isVisible && <p>"Hello React!"</p>}
    </div>
  )
}
