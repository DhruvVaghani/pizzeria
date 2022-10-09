// import { MenuList } from '@mui/material'
import React from 'react'
import {MenuList} from '../helpers/MenuLists'
import "../styles/Menu.css"


function Menu() {


function Display(tit){
    return (
        <div className='menuItem'>
        <div style={{backgroundImage: `url(${tit.image})`}}> </div>
        <h1>{tit.name}</h1>
        <p>Prize-{tit.prize}</p>
       <button className='btn-lg'>Place Order</button>

        </div>
    )
}
 


  return (
    <div className='menu'>
        <h1 className="menuTitle"> Our Menu</h1>
        <div className="menuList">{MenuList.map(Display)}
      
        </div>
    </div>
  )
}

export default Menu;