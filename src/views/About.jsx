import React from 'react'
import Card from "../components/base/Card";

let description = <span>
      We specialize in climbing shoe repair. 
      We have our own method of fully recovering your fellow travelers with whom you have shared so many rocks and hours of training.
      We work with most makes and models.
       Whether it’s re-sowing, wrapping, or arranging anything that looks good 
      to get in the trash. We dare say 'we can do anything'.
      We have the latest materials, machines and technology to make your 
      shoe new and give you everything you expect in any situation. 
      Like you, we are fans of verticality and we fully understand what you want with each resolver.
      With us you will find good service and cordiality.
       <br/>
      Welcome to Dr. Grip !!"
</span>
function About(){
      return (
           <Card 
                  className="card card-page-description"
                  title={<span>About</span>}
                  description={description}>
           </Card>
      )
}

export default About