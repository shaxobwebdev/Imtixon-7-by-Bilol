import {Icon} from 'components/Icons';
import { NavLink } from 'react-router-dom';
import React from 'react'


export default function Menu() {



  return (
      <div id='tummenu'>
      <nav className="px-2">
          
        <ul className="flex flex-col">
            <li>
               
                <NavLink activeClassName="!text-white " to={"/"} exact className="flex items-center h-10 gap-4 px-4 text-sm font-bold transition-colors text-link hover:text-white">
                {window.location.href === 'http://localhost:3000/' ? <Icon name="acthome"/> : <Icon name="home"/>}
                    Home
                    </NavLink>
            </li>
            <li>
                <NavLink activeClassName="!text-white" to={"/search"} className="flex items-center h-10 gap-4 px-4 text-sm font-bold transition-colors text-link hover:text-white">
                {window.location.href === 'http://localhost:3000/search' ? <Icon name="actsearch"/> : <Icon name="search"/>}

                    Search
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName="!text-white" to={"/collection"} className="flex items-center h-10 gap-4 px-4 text-sm font-bold transition-colors text-link hover:text-white">
                {window.location.href === 'http://localhost:3000/collection' ? <Icon name="actcollection"/> : <Icon name="lib"/>}

                Your Library
                </NavLink>
            </li>
        </ul>
      </nav>
      </div>
  )
}


