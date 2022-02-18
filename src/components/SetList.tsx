import * as React from "react";
import {
  Button,
  // Input,
  Flex,
  Checkbox,
  // Heading,
  Box,
  Badge,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { Store } from "../redux/actions/types";
import UpdateForm from "./UpdateForm";
import { deleteSet, toggleSet } from "../redux/actions/workoutActions";
import { FaPlus, FaRegTrashAlt } from "react-icons/fa";

function SetList() {
  
  const workouts = useSelector((state: Store) => state.sets);

  const dispatch = useDispatch();
  
  const handleDelete = (id: string) => dispatch(deleteSet(id));
  const handleCheck = (id: string) => dispatch(toggleSet(id));

  return (
    <Flex flexWrap={"wrap"}>
      {workouts.map(
        (set: {
          id: string,
          text: string,
          part: string,
          reps: number,
          quantity: number,
          day:string
        }) => (
          <Flex
            w={{ base: "100%", md: "50%", lg: "33.33333%", xl: "25%" }}
            h="100%"
            key={set.id}
          >
            <Box
              w={"100%"}
              borderWidth="1px"
              borderRadius="lg"
              m={2}
              overflow="hidden"
            >
              <Box p={3}>
                <Box
                  display="flex"
                  alignItems="baseline"
                  justifyContent={"space-between"}
                >
                  <Badge borderRadius="full" px="2" colorScheme="teal">
                    {set.part}
                  </Badge>
                  <Box>
                    <Checkbox
                      size={"lg"}
                      onClick={() => handleCheck(set.id)}
                    />
                  </Box>
                </Box>

                <Box
                  mt="2"
                  fontWeight="semibold"
                  as="h3"
                  textAlign={"center"}
                  lineHeight="tight"
                  isTruncated
                >
                  {set.text}
                </Box>

                <Box my={2} display={"flex"} justifyContent={"space-evenly"}>
                  <Box>
                    {set.quantity}
                    <Box as="span" color="gray.400" fontSize="sm">
                      / Sets
                    </Box>
                  </Box>
                  <Box>
                    {set.reps}
                    <Box as="span" color="gray.400" fontSize="sm">
                      / Reps
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                display={"flex"}
                backgroundColor={"teal"}
                justifyContent={"flex-end"}
                px={3}
                py={3}
              >
                <Button mr={3} disabled>
                  <FaPlus />
                </Button>
                <UpdateForm data={set} />
                <Button ml={3} onClick={() => handleDelete(set.id)}>
                  <FaRegTrashAlt />
                </Button>
              </Box>
            </Box>
          </Flex>
        )
      )}
    </Flex>
  );
}

export default SetList;
