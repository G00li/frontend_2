import { useEffect, useState } from "react";

function Relogio () {
  const [hora, setHora] = useState(new Date().toLocaleTimeString())

  useEffect(()=>{
    const interval = setInterval(() => {
      setHora(new Date().toLocaleTimeString())
      
    }, 1000);
    return () => clearInterval(interval)
  }, [])

  return <p>Hora Atual: <br/>{hora}</p>
}

export default Relogio;