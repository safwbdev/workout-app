import React from "react";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import AddForm from "./AddForm"
import {GiHamburgerMenu}from"react-icons/gi"
import { NAV_BLOG, NAV_DOCS, NAV_EXAMPLES, NAV_TITLE } from "../constants/lang";

const Header = (props:any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="teal.500"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          {NAV_TITLE}
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <GiHamburgerMenu />
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "none" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
        <Text>{NAV_DOCS}</Text>
        <Text>{NAV_EXAMPLES}</Text>
        <Text>{NAV_BLOG}</Text>
      </Stack>

      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <AddForm />
      </Box>
    </Flex>
  );
};

export default Header;
