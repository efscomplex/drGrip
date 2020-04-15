import React, {Fragment} from 'react'
import {
      CardSlider,} from '../components/base/'
import ProductConsumer from './../components/core/ProductConsumer'
import useStore from './../store'

const {products} = useStore()

function Services(){
      return (
            <section className="services">
                  {products.map(
                        product =>
                              <Fragment>
                                    <CardSlider  
                                          slides={product.models}
                                          img={"pics/"+product.logo.filename} 
                                          link={product.logo.link}
                                          description={product.description}>
                                                <ProductConsumer/>
                                    </CardSlider>
                                    <hr className="hr" align="center"/>
                              </Fragment>
                  )}
            </section>
      )
}

export default Services