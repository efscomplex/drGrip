import React from 'react'

function Card({children, style, className, actions,  title, subtitle, description, append=false}){
      return (
            <div style={style} className={className}>
                  { append ? children : null}
                  { !!title 
                        ? <h1 className="heading-xl card-title">{title}</h1>
                        : null }
                  {!!subtitle 
                        ?  <h3 className="heading-m card-subtitle">{subtitle}</h3>
                        : null}
                  {!!description 
                        ? <p className="paragraph card-description">{description}</p>
                        : null }
                  
                  {!!actions
                        ? <div className="actions"> {actions}</div>
                        : null 
                  }
                  { !append 
                        ? children
                        : null
                  }
            </div>
      )
}

export default Card