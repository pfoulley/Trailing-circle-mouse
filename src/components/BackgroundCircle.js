import { useEffect, useState } from "react";

export const BackgroundCircle = ({ centerY, family }) => {
    const [strokewidth, setStrokewidth] = useState(0)

    useEffect(() => {
        if (family) {
            setStrokewidth(10)
        } else {
            setStrokewidth(10)
        }
    }, [family])
    // const strokewidth = 10;
    return(
        <circle
            r={centerY - strokewidth / 2}
            fill="yellow"
            stroke="black"
            strokeWidth={strokewidth}
        />
    )
}