import React from "react";

function socialBar({style, children, items=[], className, size}){
      return (
            <div 
                  style={style} 
                  className={`${className} social-bar`}>{
                  items.map( 
                        (item, i) => 
                              <a 
                                    key={Math.random(i)}
                                    target="_blank" rel="noopener noreferrer" 
                                    href={item.link} 
                                    className="hover icon-wrap">
                                    <img 
                                          key={Math.random(i)} 
                                          style={{width:size}}
                                          className="icon" 
                                          src={`icons/${item.filename}`} 
                                          alt={item}/>
                                    <span key={Math.random(i)} className="icon-text">{item.text}</span>
                              </a>
                  )
            }
            {children}
            </div>
      )
}

export default socialBar