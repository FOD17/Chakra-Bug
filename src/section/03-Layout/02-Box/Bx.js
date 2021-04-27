import React from 'react'

import { Box } from "@chakra-ui/react"


/**
 *  as: change the element rendered
 * 
 * 
 * Box is the most abstract component on top of which all other Chakra UI components are built. 
 * By default, it renders a div element
 * 
 * The Box component is useful because it helps with 3 common use cases:
        Create responsive layouts with ease.
        Provide a shorthand way to pass styles via props (bg instead of backgroundColor).
        Compose new component and allow for override using the as prop.
 */

export default function Bx() {
    return (
        <>
            <Box bg="red.200" w="100%" color="blackAlpha.900">
                This is my **** in a box
            </Box>

            <br />

            <Box as="button" bg="red.200" w="50%" color="blackAlpha.900">
                This is my **** in a box
            </Box>

            <br />
            <br />

            <Box as="h1" bg="red.200" w="50%" color="blackAlpha.900">
                This is my **** in a box
            </Box>

        </>
    )
}
