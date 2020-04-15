import React, {Fragment, createContext} from 'react'
import Card from '../cards/Card'
import CtrlSlider from './CtrlSlider'
import useSlider from './SliderHook'
import './slider.scss'

let Context = createContext()

function Slide({description, src, alt}){
      return (
            <Fragment>
                  <img 
                        alt={alt}
                        className="img-slide" 
                        src={src}/> 
                  <Card 
                        title={<span className="xl cap">{description} </span>}  
                        className="card-slide"/>
            </Fragment>
      )
}

function Slider({children, slides=[{src:"#"}], controls="middle"}){
     let {slider, onClickCtrl} =  useSlider(slides)
      console.log(slider);
      
      return (
            <div className="slider">
                  {
                        !!slider.slide.src
                              ?  <Slide {...slider.slide}/>
                              :    <Context.Provider value={slider.slide}>
                                           {children}
                                    </Context.Provider>
                  }
                  <CtrlSlider update={onClickCtrl} position={controls}></CtrlSlider>
            </div>
      )
}

export default Slider
export const SliderContext = Context