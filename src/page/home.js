import React from 'react';
import Fade from 'react-reveal/Fade';
import Layout from "../common/layout/layout";
import Footer from "../common/components/footer";
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Text, Container, Heading, Link, useColorModeValue } from '@chakra-ui/react';

export default function Home(props) {
    const color = useColorModeValue("telegram.500", "telegram.400")
    return (
        <>
            <Layout >
                <Container maxW="7xl" paddingTop={{ base: "8", md: "20", lg: "32" }} paddingLeft={{ base: "8", md: "20", lg: "20" }} paddingRight={{ base: "8", md: "20", lg: "20" }} paddingBottom={{ base: "20" }} minHeight="60vh">
                    <Fade duration={500} left>
                        <Box>
                            <Text textAlign={{ base: "justify" }} fontSize={{ base: "md", md: "lg", lg: "xl" }} maxW="xl">
                                Hello, <Text as="span" color={color}>World</Text>! I'm
                            </Text>
                            <Heading as="h1" lineHeight={"-.0.001rem"} fontSize={{ base: "4xl", md: "7xl", lg: "7xl" }}>
                                <Text as="span" color={color}>Arief</Text> Zuhri.
                            </Heading>
                        </Box>
                    </Fade>
                    <Fade duration={500} delay={100} left>
                        <Box>
                            <Text textAlign={{ base: "justify" }} fontSize={{ base: "md", md: "lg", lg: "xl" }} maxW="xl">
                                I'm a software engineering student at <Link href="https://ugm.ac.id" color="teal.500" isExternal>Gadjah Mada University<ExternalLinkIcon mx="2px" /></Link>. 
                                <br></br>
                                I like my campus, the place where I prepare for my future :D
                            </Text>
                        </Box>
                    </Fade>
                </Container>
                <Footer />
            </Layout>
        </>
    );
}