import {useState} from 'react'

function updateSlider(n, slider, setSlider){
      let l = slider.slides.length
      let index = 
            (n > 0 ? 
                  slider.index+1:
                  slider.index-1)
                  % l
      if (index<0) index = l-1
      let slide = slider.slides[index]

      setSlider({slide, index, slides: slider.slides})
}
const useSlider = 
      slides => {
            let i 
                  = slides.length - 1
            let [slider, setSlider] 
                  = useState( {slide: slides[i], index:i, slides} )
            const onClickCtrl
                  =  n => updateSlider(n, slider, setSlider)

            return {slider, onClickCtrl}
      }
export default useSlider