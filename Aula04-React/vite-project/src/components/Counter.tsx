import { useEffect, useState } from "react";

const Counter = () =>{

  // const [contador, setContador] = useState(0)

  // function incrementar() {
  //   setContador(contador+1)
  // }

  // return(
  //   <div>
  //     <div style={{fontSize: "50px"}}>{contador}</div>
  //     <button onClick={incrementar}>incrementar</button>
  //   </div>
  // )
  const [user, setUser] = useState({name: "Ana", idade: "20"})
  const [showUser, setShowUser] = useState(false)

  useEffect(() => {
  const interval = setInterval(() => {
    
  }, 1000);
    return () => clearInterval(interval)
  }, [user.name])
  

  function incrementar() {
    setUser({... user, idade: user.idade + 1})
  }

  return(
    <div>
      {showUser &&(
        <>
          <div style={{fontSize: "50px"}}>Nome: {user.name}</div>
          <div style={{fontSize: "50px"}}>Idade: {user.idade}</div>
          <button onClick={incrementar}>Incrementar</button>
        </>
      )}
      <button onClick={()=> setShowUser(!showUser)}>{showUser ? "Hide User": "Show User"}</button>
    </div>
  )
}

export default Counter; 