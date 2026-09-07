import { useReducer } from "react"

const App = ()=>{
  const reducer =(state,action)=>{
    switch(action.type){
      case "add":
        return {...state,count:state.count+1}
      case "sub":
        return {...state,count:state.count-1}
      case "reset":
        return {...state,count:state.count=0}
      case "bg":
        return{...state,bg:state.bg==="dark"?"light":"dark"}
    }

  }
  const[state,dispatch] = useReducer(reducer,{count:0,bg:"dark"})
  return(
    <div className="App" style={{marginLeft:"20px",width:"100vw",height:"100vh",backgroundColor:state.bg=="dark"?"black":"white"}}>
      <p>{state.count}</p>
      <button onClick={()=>dispatch({type:"add"})}>AddCount</button>
      <button onClick={()=>dispatch({type:"sub"})}>MinusCount</button>
      <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
      <button onClick={()=>dispatch({type:"bg"})}>{state.bg}</button>
    </div>
  )
}

export default App