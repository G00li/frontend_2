import {useMemo, useState} from "react"

const HeavyCalculation = () =>{
  const [counter, setCounter] = useState(0)

  const numeroPesado = useMemo(() => {
    console.log("Calculando...");
    return counter * 2; 
    
  }, [counter]);

  return ( 
    <div>
      <p>Resultado: {numeroPesado}</p>
      <button onClick={() => setCounter (counter + 1)}>Incrementar</button>
    </div>
  )
}

export default HeavyCalculation; 
