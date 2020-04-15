import React from 'react'
import {Link} from 'react-router-dom'

function Menu({className, items, children}){
      return (
            <nav className={className}>
                  <ul>{
                        items.map(
                              (item,i) => 
                                    <Link key={i} to={item.path}> 
                                          {item.label}
                                    </Link>
                        )
                  }</ul>
                  {children}
            </nav>
      )
}

export default Menu