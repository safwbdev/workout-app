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
          Lift
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        {/* <HamburgerIcon />lol */}test
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
        <Text>Docs</Text>
        <Text>Examples</Text>
        <Text>Blog</Text>
      </Stack>

      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        {/* <Button
          variant="outline"
          _hover={{ bg: "teal.700", borderColor: "teal.700" }}
        >
          Create a set
        </Button> */}
        <AddForm />
      </Box>
    </Flex>
  );
};

export default Header;
