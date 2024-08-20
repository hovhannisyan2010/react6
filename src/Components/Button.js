function Button({addBt,prod}) {    
    return (
      <button onClick={()=>addBt(prod)}>
        Add to Cart
      </button>
    )
  }
  
  export default Button