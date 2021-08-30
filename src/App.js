import { VStack } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import PokeCard from "./Components/PokeCard";

function App() {
  return (
    <Router>
      <VStack>
        <PokeCard />
      </VStack>
    </Router>
  );
}

export default App;
