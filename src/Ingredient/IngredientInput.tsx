import { useEffect, useState } from "react";

const IngredientInput = () => {

  const [ingredient,setIngredient] = useState(['tomato','onion','garlic'])
  // const ingredient =['tomato','onion','garlic']
  const ingredientListItem = ingredient.map((ing)=>(<li key={ing}>{ing}</li>))
  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    const inputVal = event.target.ing.value
    setIngredient((ing)=>[...ing,inputVal])
    console.log(ingredient)

  }
  useEffect(()=>{
    console.log("component loaded")
  },[ingredient])
  return (
    <main>
        <form  onSubmit={handleFormSubmit} style={{display:"flex", justifyContent:"center", gap: "12px", height:"38px"}} >
        <input
        type="text"
        aria-label="add ingredient"
        placeholder=" e g . Oregano"
        name="ing"
        style={{border:"1px solid #D1D5DB", padding:"9px 13px", boxShadow : "0px 1px 2px 0px rgba(0,0,0,0.5)",flexGrow:"1", borderRadius: "6px" , minWidth:"150px", maxWidth:"400px"}}/>
      <button  aria-label="submit button" style={{backgroundColor:"#141413", color:"white", borderRadius:"6px" ,width : "150px" , fontFamily:"Inter, sans-serif",fontSize:"0.875rem", fontWeight:"500"}}> + Add Ingreident</button>
    </form>
    <ul>
      {ingredientListItem}
    </ul>
      </main>
  )
}

export default IngredientInput
