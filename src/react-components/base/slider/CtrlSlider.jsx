import React from "react"
import getStyles from './'

let {stylesFromPosition} = getStyles()

/**  position = "top center" | "middle center" "bottom center"  **/
function CtrlSlider({update, position = "middle"}){
      let style = stylesFromPosition(position)

      return (
            <div className="slider-controls" style={style}>
                  <div className="left" onClick={()=>update(-1)}>
                        {"<"}
                  </div>
                  <div className="right" onClick={()=>update(1)}>
                        {">"}
                  </div>
            </div>
      )
}

export default CtrlSlider