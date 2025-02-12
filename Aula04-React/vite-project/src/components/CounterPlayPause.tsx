import { useEffect, useState } from "react"


const Contador = () =>{

  const [contador, setContador] = useState(0)
  const [contando, setContando] = useState(false)


  useEffect(() => {
    if(!contando){
      return
    }

    const interval = setInterval(() => {
      setContador((prev) => prev + 1)
    }, 1000);
    return () => clearInterval(interval)
  }, [contando])

  const toggle = () =>{
    setContando((prev)=> !prev)
  }

  const addCounter = () => {
    setContador((prev) => prev + 1);
  }
  const subCounter = () =>{
    setContador((prev) => prev - 1)
  }

  const reset = () => {
    setContador(0)
  }


  return(
    <div>
      <h1>Contador:</h1>
      <p style={{fontSize: "36px", fontStyle: "Bold"}}>{contador}</p>
      <button onClick={subCounter}>Sub</button>
      <button onClick={reset}>Reset</button>
      <button onClick={toggle}>{contando ? "Pause": "Play"}</button>
      <button onClick={addCounter}>Add</button>
    </div>
  )
  
}

export default Contador; 