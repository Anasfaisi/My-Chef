import HatChefIcon from '../assets/ChefHat'

const Header = () => {
  return (<>
  <header style={{margin:"10px",borderRadius:"10px",border:"1", minWidth:"500px"}}>
   <div style={{display:"flex",paddingTop:"20px",alignItems:"center", justifyContent:"center",backgroundColor:"#FFFFFF", boxShadow:"0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)", padding:"20px"}}>
    <HatChefIcon size={60} />
    <h2 style={{font:"40px  sans-serif "}}>Chef Claude</h2>
   </div>
    
  </header>
  </>
  )
}

export default Header