import React, { useContext} from "react";
import {SliderContext} from '../base/slider/Slider'
import Card from './../base/Card'

function Product(){
      let product = useContext(SliderContext)
      return (
            <Card 
                  subtitle={product.name} 
                  description={product.description}/>
      )
}
export default Product