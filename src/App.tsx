import React from "react";
// import './App.css';
import { Box, IconButton } from "@chakra-ui/react";
import Appbar from "./components/Appbar";
import AddForm from "./components/AddForm"
import SetList from "./components/SetList";
import {FaPlus} from "react-icons/fa"
function App() {
  return (
    <>
      <Appbar />
      <Box maxWidth="8xl" margin="auto" p={5}>
        <SetList />
      </Box>

      <AddForm isMobile={true} />
     
    </>
  );
}

export default App;
