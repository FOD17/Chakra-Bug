import React from 'react'
import { AspectRatio } from "@chakra-ui/react"

import Bernie from '../../../images/Bernie.jpg'

/*
Props:Ratio
Common values: `21/9`, `16/9`, `9/16`, `4/3`, `1.85/1`

AspectRatio component is used to embed responsive videos and maps, etc.
*/

export default function AspRatio() {
    return (
        <div>
            <AspectRatio maxWidth="400px" ratio={9 / 16}>
                <img src={Bernie} alt="Bernie, my dog" />
            </AspectRatio>

        </div>
    )
}
