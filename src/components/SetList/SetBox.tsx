import React from "react";
import { Button, IconButton, Checkbox, Box, Badge } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import UpdateForm from "../UpdateForm";
import { deleteSet, toggleSet } from "../../redux/actions/workoutActions";
import { FaPlus, FaRegTrashAlt } from "react-icons/fa";
import {
  GiArmorPunch,
  GiChestArmor,
  GiLegArmor,
  GiSpikedShoulderArmor,
  GiLeatherArmor,
  GiCapeArmor,
  GiMuscleUp,
} from "react-icons/gi";
import { BOX_REPS, BOX_SETS } from "../../constants/lang";

const getIcon = (getPart: string) => {
  switch (getPart) {
    case "Chest":
      return <GiChestArmor />;
    case "Core":
      return <GiMuscleUp />;
    case "Back":
      return <GiCapeArmor />;
    case "Arms":
      return <GiArmorPunch />;
    case "Abdomen":
      return <GiLeatherArmor />;
    case "Legs":
      return <GiLegArmor />;
    case "Shoulders":
      return <GiSpikedShoulderArmor />;

    default:
      break;
  }
};

const SetBox = ({ set }: any) => {
  const dispatch = useDispatch();

  const handleDelete = (id: string) => dispatch(deleteSet(id));
  const handleCheck = (id: string) => dispatch(toggleSet(id));

  return (
    <Box w={"100%"} borderWidth="1px" borderRadius="lg" m={2} overflow="hidden">
      <Box p={3}>
        <Box
          display="flex"
          alignItems="baseline"
          justifyContent={"space-between"}
        >
          <Box>
            <IconButton
              aria-label="Search database"
              size="sm"
              backgroundColor={"teal"}
              mr={2}
              icon={getIcon(set.part)}
            ></IconButton>
            <Badge borderRadius="full" px="2" backgroundColor="transparent">
              {set.part}
            </Badge>
          </Box>
          <Box>
            <Checkbox size={"lg"} onClick={() => handleCheck(set.id)} />
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
              {BOX_SETS}
            </Box>
          </Box>
          <Box>
            {set.reps}
            <Box as="span" color="gray.400" fontSize="sm">
              {BOX_REPS}
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
  );
};

export default SetBox;
