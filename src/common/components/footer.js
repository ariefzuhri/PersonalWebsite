import React from 'react';
import { Link } from 'react-router-dom';
import { FiLinkedin, FiGithub, FiMail, FiCornerUpRight } from "react-icons/fi";
import { Box, Flex, Button, Stack, IconButton, HStack } from "@chakra-ui/react";

const BotNavBar = (props) => {
    return (
        <BotNavBarContainer {...props}>
            <MenuLinks />
            <Button
                mt={{ base: 4, md: 0 }}
                mr={{ base: 0, md: 8 }}
                display="block"
                size="md"
                backgroundColor="transparent"
                rightIcon={<FiCornerUpRight />}
            >
                <Link to="/portfolio">look what i have created</Link>
            </Button>
        </BotNavBarContainer>
    );
};

const MenuLinks = () => {
    function openInNewTab(url) {
        const win = window.open(url, '_blank');
        if (win != null) {
            win.focus();
        }
    }

    const openLinkedin = function () { openInNewTab("https://linkedin.com/in/ariefzuhri") };
    const openGithub = function () { openInNewTab("https://github.com/ariefzuhri") };
    const sendEmail = function () { openInNewTab("mailto:ariefzuhri72@gmail.com") };

    return (
        <>
            <Box
                display={{ base: "block", md: "block" }}
                flexBasis={{ base: "100%", md: "auto" }}
            >
                <Stack
                    spacing={4}
                    align="center"
                    justify={["center", "center", "flex-start", "flex-start"]}
                    direction={["column", "column", "row", "row"]}
                >
                    <Box display={{ base: "none", md: "flex" }} mt={{ base: 4, md: 0 }} alignContent="center">
                        <IconButton size="sm" bg="transparent" icon={<FiGithub size="20px" />} onClick={openGithub} aria-label="button" />
                    </Box>
                    <Box display={{ base: "none", md: "flex" }} mt={{ base: 4, md: 0 }} alignContent="center">
                        <IconButton size="sm" bg="transparent" icon={<FiLinkedin size="20px" />} onClick={openLinkedin} aria-label="button" />
                    </Box>
                    <Box display={{ base: "none", md: "flex" }} mt={{ base: 4, md: 0 }} alignContent="center">
                        <IconButton size="sm" bg="transparent" icon={<FiMail size="20px" />} onClick={sendEmail} aria-label="button" />
                    </Box>

                    <Box display={{ base: "block", md: "none", lg: "none" }}>
                        <HStack spacing={4}>
                            <IconButton size="sm" bg="transparent" icon={<FiGithub size="20px" />} onClick={openGithub} aria-label="button" />
                            <IconButton size="sm" bg="transparent" icon={<FiLinkedin size="20px" />} onClick={openLinkedin} aria-label="button" />
                            <IconButton size="sm" bg="transparent" icon={<FiMail size="20px" />} onClick={sendEmail} aria-label="button" />
                        </HStack>
                    </Box>
                </Stack>
            </Box>
        </>
    );
};

const BotNavBarContainer = ({ children, ...props }) => {
    return (
        <Flex
            as="nav"
            align="center"
            justify={["space-evenly", "space-evenly", "space-between", "space-between"]}
            wrap={["wrap-reverse", "wrap-reverse", "nowrap", "nowrap"]}
            w="100%"
            mt={8}
            p={8}
            bg={["telegram.500", "telegram.500", "transparent", "transparent"]}
            color={["white", "white", "teal.500", "teal.500"]}
            {...props}
        >
            {children}
        </Flex>
    );
};

export default BotNavBar;