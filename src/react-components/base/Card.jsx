import React from 'react'

function Card({children, className, custom,  title, subtitle, description}){
      return (
            <div className={className}>
                  { !!title 
                        ? <h1 className="heading-1 card-title">{title}</h1>
                        : null }
                  {!!subtitle 
                        ?  <h3 className="heading-3 card-subtitle">{subtitle}</h3>
                        : null}
                  {!!description 
                        ? <p className="paragraph card-description">{description}</p>
                        : null }
                  
                  {!!custom
                        ? {custom}
                        : null 
                  }
                  {!!children
                        ? <div className="actions"> {children}</div>
                        : null 
                  }
            </div>
      )
}

export default Card