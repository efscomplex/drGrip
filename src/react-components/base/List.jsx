import React from "react"

function List({className, items, title, decoration}){
      let textDecoration =
            !!decoration 
                  ? {textDecoration: decoration}
                  : {textDecoration: "none"}
      let styles = {...textDecoration, marginTop:"1rem"}
      return(
            <ul className={className}>
                  <h3 style={{marginBottom:"1.1em"}}>{title}</h3>
                  {items.map( (item,i) => <li key={i} style={styles}> {item}</li>)}
            </ul>
      )
}

export default List