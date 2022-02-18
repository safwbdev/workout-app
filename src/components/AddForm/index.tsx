import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  ModalBody,
  Box,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import WorkoutAdd from "./Form";
import { useDispatch } from "react-redux";

import { addSet } from "../../redux/actions/workoutActions";

import { FaPlus } from "react-icons/fa";
import { ADD_BTN_TEXT, ADD_SUBMIT, ADD_TITLE } from "../../constants/lang";

const AddSet = (props: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [qty, setQty] = useState(0);
  const [reps, setReps] = useState(0);

  const dispatch = useDispatch();

  const handleName = (e: any): void => setName(e.target.value);
  const handleBody = (e: any): void => setBody(e.target.value);

  const clearAll= ()=>{
    setName("")
setBody("")
setQty(0)
setReps(0)
  }
  const handleSubmit = () => {
    dispatch(
      addSet({
        id: uuidv4(),
        text: name,
        quantity: qty,
        reps: reps,
        part: body,
        done: false,
      })
    );
    clearAll()
    onClose();
  };

  return (
    <>
      {props.isMobile ? (
        <Box
          onClick={onOpen}
          position="fixed"
          bottom="20px"
          right={["16px", "84px"]}
          display={{ base: "block", sm: "none" }}
          zIndex={1}
        >
          <IconButton
            colorScheme="teal"
            aria-label="Add set"
            size="lg"
            isRound
            icon={<FaPlus />}
          />
        </Box>
      ) : (
        <Button
          onClick={onOpen}
          variant="outline"
          _hover={{ bg: "teal.700", borderColor: "teal.700" }}
        >
         {ADD_BTN_TEXT}
        </Button>
      )}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{ADD_TITLE}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <WorkoutAdd
              handleName={handleName}
              handleBody={handleBody}
              setQty={setQty}
              qty={qty}
              setReps={setReps}
              reps={reps}
              onClose={onClose}
            />
          </ModalBody>

          <ModalFooter>
            <Button 
              colorScheme="blue" 
              mr={3} 
              onClick={onClose}>
              Close
            </Button>
            <Button onClick={handleSubmit}>{ADD_SUBMIT}</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AddSet;
