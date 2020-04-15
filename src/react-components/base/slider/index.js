function stylesFromPosition(position){
      position =  position.toLowerCase()
      let align = "flex-start"
      let justy = position
            .includes("center")
                  ? "center" 
                  : "space-between"
      if (position.includes("middle")){
            align = "center"
      } else if (position.includes("bottom")){
            align = "flex-end"
      }

      return {
            justifyContent: justy,
            alignItems: align,
      }
}

export default  () => {
      return {
            stylesFromPosition,
      }
}