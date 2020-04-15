import React from 'react'
import Grid from './Grid'

function Card({className, style, children, title, subtitle, description, img, link}){
      return (
            <Grid rows="1" cols="2" gap="3rem" style={style} className={className}>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                        <img src={img} alt="card-img" style={{width:"100%"}}/>
                  </a>
                  <main>
                        { !!title 
                              ? <h1 className="heading-1 card-title">{title}</h1>
                              : null }
                        {!!subtitle 
                              ?  <h3 className="heading-3 card-subtitle">{subtitle}</h3>
                              : null}
                        {!!description 
                              ? <p className="paragraph card-description">{description}</p>
                              : null }
                        {!!children
                              ? <div className="actions"> {children}</div>
                              : null }
                  </main>
            </Grid>
      )
}

export default Card