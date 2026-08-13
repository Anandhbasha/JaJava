const Button = (props)=>{
    return(
        <>
        <button style={{width:"300px",height:"100px",marginBottom:"10px", backgroundColor:props.color}}>{props.value}</button>
    </>
    )
}
export default Button