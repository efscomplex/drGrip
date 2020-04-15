import React from 'react'
import Grid from '../Grid'
import Slider from '../slider/Slider'

import './card-slider.scss'
import Card from '../cards/Card'

function CardSlider({children,description,  style, slides, img, link}){
      return (
            <Grid rows="2" cols="2" gap="3rem" style={style} className="card-slider">
                  <a href={link} target="_blank" rel="noopener noreferrer">
                        <img src={img} alt="card-img" style={{width:"100%"}}/>
                  </a>
                  <Card description={description}></Card>
                  <Slider slides={slides} controls="bottom">
                        {children}
                  </Slider>
            </Grid>
      )
}

export default CardSlider