import React from "react"
import { Link } from 'react-router-dom';
import { Box, Text } from "@chakra-ui/react"

export default function Logo(props) {
  return (
    <Box {...props}>
      <Text fontSize="xl" fontWeight="normal" pt="2">
        <Link to="/">ariefzuhri</Link>
      </Text>
    </Box>
  )
}
