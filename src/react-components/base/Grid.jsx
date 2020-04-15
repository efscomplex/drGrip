import React from "react";


function Grid({style={}, className='grid', children, rows="initial", cols=2, gap="2rem"}){      
      let styles = {
            display: "grid",
            gridGap: `${gap}`,
            gridTemplateColumns:isNaN(cols)? cols : `repeat(${cols},1fr)`,
            gridTemplateRows:isNaN(rows)? rows : `repeat(${rows},1fr)`
      }
      return (
            <div className={className} style={{...style,...styles}}>
                  {children}
            </div>
      )
}
export default Grid