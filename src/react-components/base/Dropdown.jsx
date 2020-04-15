import React from 'react'

function onClickOption(e){
      console.log(e);
}
function Dropdown({options=["Op-1", "Op-2"], label="Select", children}){
      return (
            <div className="dropdown">
                  <div  className="dropdown-label">
                        {children || label}
                        <div className="dropdown-options">{
                              options.map( 
                                    option => 
                                          <div   key={option} className="dropdown-item"
                                                      onClick={ e =>onClickOption(e)}>
                                                {option}
                                          </div>
                              )
                        }</div>
                  </div>
            </div>
      )
}

export default Dropdown