
const IngredientInput = () => {
  return (
    <form action="">
      <main style={{display:"flex", justifyContent:"center", gap: "12px", height:"38px"}}>
        <input
        type="text"
        aria-label="add ingredient"
        placeholder=" e g . Oregano"
        style={{border:"1px solid #D1D5DB", padding:"9px 13px", boxShadow : "0px 1px 2px 0px rgba(0,0,0,0.5)",flexGrow:"1", borderRadius: "6px" , minWidth:"150px", maxWidth:"400px"}}/>
      <button aria-label="submit button" style={{backgroundColor:"#141413", color:"white", borderRadius:"6px" ,width : "150px" , fontFamily:"Inter, sans-serif",fontSize:"0.875rem", fontWeight:"500"}}> + Add Ingreident</button>
      </main>
    </form>
  )
}

export default IngredientInput
