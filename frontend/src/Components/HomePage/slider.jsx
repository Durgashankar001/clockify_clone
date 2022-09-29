import React from 'react'
import { Flex, Heading, Text } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";

const Slider = ({data,dir}) => {
    return (
        <Marquee direction={dir}>
          {data.map((el) => (
            <Flex
              w={"300px"}
              h={"160px"}
              p={"15px"}
              _hover={{cursor: "pointer"}}
              m={2}
              boxShadow={"0 2px 6px 0 rgb(1 87 155 / 20%)"}
              alignItems={"flex-start"}
              flexDir={"column"}
            >
              <Text color={"#ffbf00"}> ★★★★★ </Text>
              <Heading size={"xs"}>{el.title}</Heading>
              <Text fontSize={"xs"} mt={3} mb={3}>{el.feedback}</Text>
              <Text fontSize={"xs"}>{el.client}</Text>
            </Flex>
          ))}
        </Marquee>
      );
}

export default Slider