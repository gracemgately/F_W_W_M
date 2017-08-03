import React, { Component } from 'react'
import { Router } from 'react-router'

import { gridInfo } from './grid-info'
import Comb from './Comb'

/**
 * COMPONENT
 */
export default class Grid extends Component {

  render () {

    const styles={
      fill: "lime",
      stroke: "black",
      strokeWidth: 3
    }

    return (
      <div>
        <svg width="600" height="570">
          <g transform="translate(300,285)">
          {
            gridInfo.map((info, index) => {
              return (
                <Comb key={index} info={info} />
              )
            })
          }
            </g>
            </svg>
        </div>
    )
  }
}
        
// /**
//  * CONTAINER
//  */

// /**
//  * PROP TYPES
//  */

//        <g style={styles} transform={"translate(-129.90381056766577,225)"}>
//       <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//           </g>
//       <g style={styles} transform={"translate(-155.88457268119893,180)"}>
//             <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//                   </g>
//       <g style={styles} transform="translate(-181.8653347947321,135)">
//           <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//                     </g>
//       <g style={styles} transform="translate(-207.84609690826525,90)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//                     </g>
//       <g style={styles} transform="translate(-233.8268590217984,45)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//                     </g>
//       <g style={styles} transform="translate(-259.80762113533154,0)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//                     </g>
//       <g style={styles} transform="translate(-77.94228634059948,225)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//                     </g>
//       <g style={styles} transform="translate(-103.92304845413263,180)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//                     </g>
//       <g style={styles} transform="translate(-129.90381056766577,135)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//                     </g>
//       <g style={styles} transform="translate(-155.88457268119896,90)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//                     </g>
//       <g style={styles} transform="translate(-181.86533479473212,45)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//                     </g>
//       <g style={styles} transform="translate(-207.84609690826525,0)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//                     </g>
//       <g style={styles} transform="translate(-233.8268590217984,-45)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//                     </g>
//       <g style={styles} transform="translate(-25.980762113533178,225)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//                     </g>
//       <g style={styles} transform="translate(-51.96152422706633,180)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-77.94228634059948,135)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-103.92304845413264,90)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-129.9038105676658,45)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-155.88457268119896,0)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-181.86533479473212,-45)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-207.84609690826525,-90)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(25.980762113533153,225)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(0,180)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-25.980762113533153,135)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-51.96152422706631,90)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-77.94228634059948,45)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-103.92304845413263,0)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-129.90381056766577,-45)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-155.88457268119896,-90)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-181.86533479473212,-135)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(77.94228634059947,225)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(51.96152422706631,180)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(25.980762113533164,135)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(0,90)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-25.980762113533157,45)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-51.96152422706631,0)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-77.94228634059948,-45)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-103.92304845413263,-90)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-129.90381056766577,-135)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-155.88457268119896,-180)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(129.90381056766577,225)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(103.92304845413263,180)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(77.94228634059948,135)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(51.96152422706631,90)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(25.980762113533157,45)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(0,0)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-25.980762113533157,-45)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-51.96152422706631,-90)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-77.94228634059948,-135)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-103.92304845413263,-180)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-129.90381056766577,-225)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(155.88457268119896,180)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(129.90381056766577,135)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(103.92304845413263,90)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(77.94228634059948,45)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(51.96152422706631,0)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(25.980762113533157,-45)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(0,-90)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-25.980762113533164,-135)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-51.96152422706631,-180)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-77.94228634059947,-225)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(181.86533479473212,135)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(155.88457268119896,90)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(129.90381056766577,45)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(103.92304845413263,0)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(77.94228634059948,-45)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(51.96152422706631,-90)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(25.980762113533153,-135)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(0,-180)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-25.980762113533153,-225)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(207.84609690826525,90)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(181.86533479473212,45)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(155.88457268119896,0)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(129.9038105676658,-45)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(103.92304845413264,-90)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(77.94228634059948,-135)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(51.96152422706633,-180)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(25.980762113533178,-225)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(233.8268590217984,45)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(207.84609690826525,0)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(181.86533479473212,-45)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(155.88457268119896,-90)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(129.90381056766577,-135)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(103.92304845413263,-180)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(77.94228634059948,-225)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(259.80762113533154,0)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(233.8268590217984,-45)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(207.84609690826525,-90)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(181.8653347947321,-135)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(155.88457268119893,-180)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(129.90381056766577,-225)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//         </g>
//             </svg>
//         </div>
//     )
//   }
// }

