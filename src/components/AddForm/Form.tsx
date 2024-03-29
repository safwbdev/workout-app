import React from "react";
import { Input, Select, Box, IconButton } from "@chakra-ui/react";
import { bodyTypes } from "../../constants/bodyTypes";
import { FaPlus, FaMinus } from "react-icons/fa";
import { ADD_BODY_PLACEHOLDER, ADD_NAME_PLACEHOLDER, ADD_REP_PLACEHOLDER, ADD_SET_PLACEHOLDER } from "../../constants/lang";

function AddForm(props: any) {
  const { setReps, setQty, handleName, handleBody, reps, qty } = props;

  const handleReps = (e: any): void => setReps(e.target.value);
  const handleQty = (e: any): void => setQty(e.target.value);
  const incrementRep = (): void => setReps(reps + 1);
  const decrementRep = (): void => setReps(reps - 1);
  const incrementQty = (): void => setQty(qty + 1);
  const decrementQty = (): void => setQty(qty - 1);

  return (
    <Box display={"flex"} flexWrap="wrap" flexFlow={"column"}>
      <Box py={2} flexGrow={1}>
        <Input placeholder={ADD_NAME_PLACEHOLDER} onChange={handleName} />
      </Box>
      <Box py={2} flexGrow={1}>
        <Select placeholder={ADD_BODY_PLACEHOLDER} onChange={handleBody}>
          {bodyTypes.map((type: any) => (
            <option key={type.value} value={type.value}>{type.label}</option>
          ))}
        </Select>
      </Box>
      <Box
        py={2}
        display="flex"
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box>{ADD_SET_PLACEHOLDER}</Box>
        <Box>
          <Box display={"flex"}>
            <IconButton
              onClick={decrementQty}
              aria-label="Search database"
              icon={<FaMinus />}
              isDisabled={qty === 0}
            />
            <Input isReadOnly value={qty} onChange={handleQty} mx={2} />
            <IconButton
              onClick={incrementQty}
              aria-label="Search database"
              icon={<FaPlus />}
            />
          </Box>
        </Box>
      </Box>
      <Box
        py={2}
        flexGrow={1}
        display="flex"
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box>{ADD_REP_PLACEHOLDER}</Box>
        <Box display={"flex"}>
          <IconButton
            onClick={decrementRep}
            aria-label="Search database"
            icon={<FaMinus />}
            isDisabled={reps === 0}
          />
          <Input isReadOnly value={reps} onChange={handleReps} mx={2} />
          <IconButton
            onClick={incrementRep}
            aria-label="Search database"
            icon={<FaPlus />}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default AddForm;
