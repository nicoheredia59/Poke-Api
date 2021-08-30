import { Heading, HStack, Image, VStack } from "@chakra-ui/react";
import React from "react";
import { useApi } from "../Redux/Services/PokeData";
import Stats from "./Stats";

const RenderPokemon = () => {
  const { data: pokemon } = useApi(
    `https://pokeapi.co/api/v2/pokemon?limit=10`
  );
  console.log(pokemon);

  return (
    <HStack flexWrap="wrap" justifyContent="center">
      {pokemon.map((el, index) => {
        return (
          <VStack
            w={"auto"}
            h={"auto"}
            bg="gray.100"
            p={100}
            margin="10px"
            justifyContent="center"
            borderRadius="xl"
            boxShadow="xl"
            key={index}
          >
            <HStack>
              <Heading>{el.name}</Heading>
              <Image w={150} h={150} src={el.sprites.front_default} />
              <VStack>
                <Heading>{el.stats[0].base_stat}</Heading>
                <Heading>{el.stats[1].base_stat}</Heading>
                <Heading>{el.stats[2].base_stat}</Heading>
                <Heading>{el.stats[3].base_stat}</Heading>
                <Heading>{el.stats[4].base_stat}</Heading>
                <Heading>{el.stats[5].base_stat}</Heading>
              </VStack>
              <Stats pokemon={pokemon} />
            </HStack>
          </VStack>
        );
      })}
    </HStack>
  );
};

const PokeCard = () => {
  return <VStack>{RenderPokemon()}</VStack>;
};

export default PokeCard;
