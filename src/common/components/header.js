import Logo from "./logo";
import axios from 'axios';
import React, { Component } from "react";
import { IoHappy } from "react-icons/io5";
import { FiMoon, FiSun, FiSmile } from "react-icons/fi";
import { Box, Flex, Text, Button, Stack, useColorMode, IconButton, useDisclosure, HStack } from "@chakra-ui/react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody } from "@chakra-ui/react"

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
    }
  }

  componentDidMount() {
    const url = 'https://api.quotable.io/random';
    axios.get(url)
      .then(data => {
        const response = data.data
        this.setState({ quote: `"${response.content}" — ${response.author}` })
        console.log(data);
      }).catch(function (err) {
        console.log(err)
      });
  }

  render() {
    return (
      <NavBarContainer {...this.props}>
        <Logo
          w="100px"
          color={["white", "white", "teal.500", "teal.500"]}
        />
        <MenuLinks quote={this.state.quote} />
      </NavBarContainer>
    );
  }

};

const MenuLinks = ({ quote }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const { colorMode, toggleColorMode } = useColorMode()
  const changeDarkMode = () => {
    toggleColorMode();
  }

  return (
    <>
      <Box
        display={{ base: "block", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Stack
          spacing={2}
          align="center"
          justify={["flex-end", "flex-end", "flex-end", "flex-end"]}
          direction={["row", "row", "row", "row"]}
        >
          <Box display={{ base: "none", md: "flex" }} mt={{ base: 4, md: 0 }} alignContent="center">
            <IconButton size="md" bg="transparent" icon={<FiSmile size="24px" />} onClick={onOpen} aria-label="button" />
          </Box>
          <Box display={{ base: "none", md: "flex" }} mt={{ base: 4, md: 0 }} alignContent="center">
            <IconButton size="md" bg="transparent" icon={colorMode === "light" ? <FiMoon size="24px" /> : <FiSun size="24px" />} onClick={changeDarkMode} aria-label="button" />
          </Box>

          <Box display={{ base: "block", md: "none", lg: "none" }}>
            <HStack spacing={2}>
              <IconButton size="md" bg="transparent" icon={<FiSmile size="24px" />} onClick={onOpen} aria-label="button" />
              <IconButton size="md" bg="transparent" icon={colorMode === "light" ? <FiMoon size="24px" /> : <FiSun size="24px" />} onClick={changeDarkMode} aria-label="button" />
            </HStack>
          </Box>
        </Stack>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Special quote for you...</ModalHeader>
          <ModalBody>
            <Text fontWeight="normal" mb="1rem">
              {quote}
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button rightIcon={<IoHappy />} colorScheme="teal" variant="outline" mr={3} onClick={onClose}>
              <Text mt="2">I'm inspired</Text>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      w="100%"
      mb={8}
      p={8}
      bg={["telegram.500", "telegram.500", "transparent", "transparent"]}
      color={["white", "white", "teal.500", "teal.500"]}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;