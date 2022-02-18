import * as React from "react";
import { Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Store } from "../../redux/actions/types";
import SetBox from "./SetBox";

const SetList = () => {
  const workouts = useSelector((state: Store) => state.sets);

  return (
    <Flex flexWrap={"wrap"}>
      {workouts.map(
        (set: {
          id: string,
          text: string,
          part: string,
          reps: number,
          quantity: number,
          day: string,
        }) => (
          <Flex
            w={{ base: "100%", md: "50%", lg: "33.33333%", xl: "25%" }}
            h="100%"
            key={set.id}
          >
            <SetBox set={set} />
          </Flex>
        )
      )}
    </Flex>
  );
};

export default SetList;
