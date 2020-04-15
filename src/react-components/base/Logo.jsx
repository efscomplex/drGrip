import React from 'react'

function Logo({className, style, src, text}){
            return (
                  <div className={className} style={style}>
                        {!!src 
                                    ? <img alt="logo" src={src} className="logo-img"></img>
                                    : null }
                        <p className="description"> {text}</p>
                  </div>
            )
}

export default Logo