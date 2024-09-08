import Header from "./components/Header.jsx"
import Result from "./components/Result.jsx"
import UserInput from "./components/UserInput.jsx"
import { useState } from "react"

function App() {
  const [userInput , setUsetInput] = useState({
    initialInvestment : 10000,
    annualInvestment : 1200, 
    expectedReturn:6,
    duration:10,
   })
       
   const inputIsValid = userInput.duration >= 1;

   function handleChange(inpuIdentifier , newValue){
    setUsetInput((pervUserInput) => {
        return {
            ...pervUserInput,
            [inpuIdentifier] : +newValue ,
        }
    })
   }


return (<>
    <Header/>
    <UserInput userInput={userInput} onChange={handleChange}/>
    {!inputIsValid && <p className="center ">Please inter a duration greater than zero</p>}
   {inputIsValid && <Result input={userInput}/>}
    </>
  )
}

export default App
