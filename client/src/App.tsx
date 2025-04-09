import './App.css'

function App() {

  fetch("http://localhost:3310/api/employees")
  .then((response: { json: () => any; }) => response.json())
  .then((sampleEmployee) => console.log(sampleEmployee))
  .catch((error: any) => console.error("Error fetching employee:", error));

  
  
  return (
    <>
        
    </>
  )
}

export default App