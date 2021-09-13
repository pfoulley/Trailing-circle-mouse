import { arc, select } from 'd3'

export const Mouth = () => {

    const mouthRadius = 140;
    const mouthWidth = 20;
    
    const arcT = arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius + mouthWidth)
    .startAngle(Math.PI / 2)
      .endAngle(Math.PI * 3 / 2);
    
    return (
      <path d={arcT()}/>
    )
  }