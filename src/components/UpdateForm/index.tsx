import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";

import WorkoutUpdate from "./Form";
import { addSet, deleteSet } from "../../redux/actions/workoutActions";
import { useDispatch } from "react-redux";


const UpdateSet = ({ data }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState(data.text);
  const [body, setBody] = useState(data.part);
  const [qty, setQty] = useState(data.quantity);
  const [reps, setReps] = useState(data.reps);
  // const [day, setDay] = useState(data.day);

  const handleName = (e: any): void => setName(e.target.value);
  const handleBody = (e: any): void => setBody(e.target.value);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(deleteSet(data.id))
    dispatch(
      addSet( {
        id:data.id,
        text: name,
        part: body,
        quantity: qty,
        reps:reps,
        day: data.day,
        done: data.done,
      })
    );
      onClose();
  };

  return (
    <>
      <Button onClick={onOpen}>
        <FaRegEdit />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Set</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <WorkoutUpdate
              onClose={onClose}
              handleName={handleName}
              handleBody={handleBody}
              setQty={setQty}
              setReps={setReps}
              name={name}
              body={body}
              qty={qty}
              reps={reps}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={handleSubmit}>Update Set</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default UpdateSet;
