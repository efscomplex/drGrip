import React, { Fragment } from 'react'
import {
      ContactForm, 
      Card,
      GoogleMap, } from './../components/base'

let description = <div>
      <p>6769 8th Street</p>
      <p>Buena Park, CA, 90620</p>
      <p>714.522.5556</p>
      <p>Shop Hours: 9am-4:30 Monday-Friday</p>
      <p>Walk-ins are welcome.</p>
</div>

function Contact(){
      return (
            <Fragment>
                  <h1>Contact page</h1>
                  <div className="main-contact row mg-4all-2">
                        <Card 
                              title="Dr. Grip" 
                              subtitle="Ressemelage"
                              description={description}>
                        </Card>
                        <GoogleMap ></GoogleMap>
                        <ContactForm></ContactForm> 
                  </div>
            </Fragment>
      )
}

export default Contact