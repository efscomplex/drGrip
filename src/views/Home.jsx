import  React, {Fragment} from "react";

import Card from '../components/base/Card'
import Grid from '../components/base/Grid'

function Home(){
      return (
            <Fragment>
                   <Card 
                        className="card mg-2"
                        title="WE CAN RESOLE ANY BRAND OF CLIMBING SHOES"
                        subtitle="CURRENT RESOLE TURN-AROUND TIME: 2-3 BUSINESS DAYS">
                        <button className="btn dark">ORDER FORM</button>            
                  </Card>
                  <Grid className="grid">
                        <img alt="slide" className="pic" src="https://images.squarespace-cdn.com/content/v1/5966a58dcf81e0cc1b828cca/1508432462888-6HYEOD4MJRZNAPRAZRA1/ke17ZwdGBToddI8pDm48kNs35WLKBGG7plDT68ArrOMUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcF_gds3JS77bprX7rX9-Bg-lXDM0X1LEhQI6CxeFaQuAxd9fPcajuUfL1924oaouz/YB_BeforeAfter_1.jpg?format=1000w"></img>
                        <img alt="slide" className="pic" src="https://images.squarespace-cdn.com/content/v1/5966a58dcf81e0cc1b828cca/1508432465144-5YOZ0VL93EDMD8VS85PE/ke17ZwdGBToddI8pDm48kNs35WLKBGG7plDT68ArrOMUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcF_gds3JS77bprX7rX9-Bg-lXDM0X1LEhQI6CxeFaQuAxd9fPcajuUfL1924oaouz/YB_BeforeAfter_3.jpg?format=1000w"></img>
                        <img alt="slide" className="pic" src="https://images.squarespace-cdn.com/content/v1/5966a58dcf81e0cc1b828cca/1508432462586-2G1SB13ZZ1JSVEW6JOUK/ke17ZwdGBToddI8pDm48kNs35WLKBGG7plDT68ArrOMUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcF_gds3JS77bprX7rX9-Bg-lXDM0X1LEhQI6CxeFaQuAxd9fPcajuUfL1924oaouz/YB_BeforeAfter_2.jpg?format=1000w"></img>
                  </Grid>
            </Fragment>
      )
}

export default Home