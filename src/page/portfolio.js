import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import Layout from "../common/layout/layout";
import { FiCornerUpLeft } from "react-icons/fi";
import { ExternalLinkIcon } from '@chakra-ui/icons';
import PictureSade from "../assets/images/portfolio_sade.png";
import PictureExpy from "../assets/images/portfolio_expy.png";
import PictureMovee from "../assets/images/portfolio_movee.png";
import { Box, Text, Container, Grid, Image, Badge, Button, Spacer, Flex } from '@chakra-ui/react';

const PortfolioContent = () => {
    const openInNewTab = (url) => {
        const win = window.open(url, '_blank');
        if (win != null) {
            win.focus();
        }
    }

    const portfolioList = [
        {
            imageUrl: PictureExpy,
            title: "Expy",
            description: "Expired monitor app",
            feature: "Jetpack",
            link: "https://github.com/ariefzuhri/Expy",
        },
        {
            imageUrl: PictureMovee,
            title: "Movee",
            description: "Movie catalog project",
            feature: "Jetpack",
            link: "https://github.com/ariefzuhri/Movee",
        },
        {
            imageUrl: PictureSade,
            title: "Sade",
            description: "Online marketplace app (team project)",
            feature: "Kotlin",
            link: "https://github.com/nngarfdn/Sade",
        }
    ]

    return (
        <>
            {portfolioList.map((portfolio) =>
                <Box borderWidth="1px" borderRadius="lg" overflow="hidden" mb="4">
                    <Image src={portfolio.imageUrl} alt={portfolio.description} />
                    <Box p="4">
                        <Box
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            isTruncated
                        >
                            <Flex>
                                <Box>
                                    {portfolio.title}
                                    <Badge borderRadius="full" px="2" pt="2" colorScheme="telegram" ml="2">
                                        {portfolio.feature}
                                    </Badge>
                                </Box>
                                <Spacer />
                                <Box
                                    as="button"
                                    bg="transparent"
                                    color="teal.500"
                                    borderRadius="xs"
                                    onClick={() => openInNewTab(portfolio.link)}
                                >
                                    <ExternalLinkIcon />
                                </Box>
                            </Flex>
                        </Box>
                        <Box>{portfolio.description}</Box>
                    </Box>
                </Box>
            )}
        </>
    );
}

export default function Portfolio() {
    return (
        <>
            <Layout >
                <Container maxW="7xl">
                    <Fade duration={500} right>
                        <Button
                            display="block"
                            size="md"
                            backgroundColor="transparent"
                            leftIcon={<FiCornerUpLeft />}
                        >
                            <Link to="/">back to home</Link>
                        </Button>
                    </Fade>
                </Container>
                <Container maxW="7xl" paddingTop={2} paddingLeft={{ base: "8", md: "12", lg: "12" }} paddingRight={{ base: "8", md: "12", lg: "12" }} >
                    <Fade duration={500} right>
                        <Box>
                            <Text textAlign={{ base: "justify" }} fontSize={{ base: "md", md: "lg", lg: "xl" }} maxW="xl">
                                Recent <Text as="span" color="telegram.500">work</Text>.
                            </Text>
                        </Box>
                    </Fade>
                    <Fade duration={500} delay={100} right>
                        <Grid
                            pt={4}
                            templateColumns="repeat(3, 1fr)"
                            gap={4}
                            display={{ base: "none", md: "flex" }}
                        >
                            <PortfolioContent />
                        </Grid>
                        <Grid
                            pt={2}
                            templateRows="repeat(3, 1fr)"
                            gap={4}
                            display={{ base: "block", md: "none", lg: "none" }}
                        >
                            <PortfolioContent />
                        </Grid>
                    </Fade>
                </Container>
            </Layout>
        </>
    );
}