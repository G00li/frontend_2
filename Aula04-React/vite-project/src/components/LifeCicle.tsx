import {useEffect} from "react"

const LifeCicleTest = () =>{
  useEffect(() => {
    console.log("componente Mounted");

    return () => {
      console.log("Componente desmontado");      
    }
  }, [])
  return ("Hello world")
}

export default LifeCicleTest; 