
import './App.css'
import Header from './component/Header'
import IngredientInput from './Ingredient/IngredientInput'

function App() {

  return (
<>
<div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}}>

<Header />
<IngredientInput />
</div>
</>
  )
}

export default App
