import { Heading, VStack } from "@chakra-ui/react";
import React from "react";

const Stats = ({ pokemon }) => {
  return (
    <VStack>
      <Heading>{pokemon.id}</Heading>
    </VStack>
  );
};

export default Stats;
