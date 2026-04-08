import React from 'react'
import HatChefIcon from '../assets/ChefHat'

const Header = () => {
  return (<>
  <div style={{margin:"10px",borderRadius:"10px",border:"1",backgroundColor:"#fafaefff"}}>
   <div style={{display:"flex",paddingTop:"20px",alignItems:"center", justifyContent:"center",backgroundColor:"white", boxShadow:"0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)", padding:"20px"}}>
    <HatChefIcon size={60} />
    <h2 style={{font:"40px  sans-serif"}}>Chef Claude</h2>
   </div>
    
  </div>
  </>
  )
}

export default Header