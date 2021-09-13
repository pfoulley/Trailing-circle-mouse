import { useEffect, useState } from "react";

export const Eyes = ({ wink, closeEye }) => {

    const [eyeOffsetX, setEyeOffsetX] = useState(0)
    const [eyeOffsetY, setEyeOffsetY] = useState(0)
    const [eyeRadius, setEyeRadius] = useState(0)
    useEffect(() => {
            setEyeRadius(50 + Math.random() * 2)
            setEyeOffsetX(90 + Math.random() * 2)
            setEyeOffsetY(100 + Math.random() * 2)
       
    },[wink])
    //  const eyeOffsetX = 90 // Use to change the position of the eye in relation with centerX
    // const eyeOffsetY = 100;

    // const eyeRadius = 50
    
    if (closeEye) {
        return <p></p>
    }
    return(
        <>
            
            <circle
                cx={- eyeOffsetX}
                cy={- eyeOffsetY}
                r={eyeRadius}
            />
            {wink &&
                <circle
                    cx={eyeOffsetX}
                    cy={- eyeOffsetY}
                    r={eyeRadius}
                />
            }
       
        </>
    )
}