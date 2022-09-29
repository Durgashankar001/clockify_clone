import React from 'react'
import "./Navbar.css"
import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    Button,
    useDisclosure,
    useColorModeValue,
    Stack,
    Image,
    Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import { useState } from 'react';

const links = ["features", "download"]


const Links = ({ children }) => (
    <RouterLink
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
            textDecoration: "none",
            bg: useColorModeValue("blue.400", "blue.400"),
        }}
        to={`/${children}`}
    >
        <Text className='navbar_text'>{children}</Text>
    </RouterLink>
);


const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [user, setUser] = useState(false)
    return (
        <div style={{background:"linear-gradient(#e8f5fd,#ffff)"}}>
            <Box py={[1, 3]} px={[null, 20]} mb={10}>
                <Flex
                    h={[10, 16]}
                    className="navbar_flex"
                >
                    <IconButton
                        size={"md"}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={"Open Menu"}
                        display={{ md: "none" }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} className='navbar_flex_button'>
                        <Box>
                            <RouterLink to={"/"}>
                                <Image src="https://clockify.me/assets/images/clockify-logo.svg"></Image>
                            </RouterLink>
                        </Box>
                        <HStack
                            as={"nav"}
                            spacing={4}
                            display={{ base: "none", md: "flex" }}
                        >
                            {links.map((el) => (
                                <Links key={el}>{el}</Links>
                            ))}
                        </HStack>
                    </HStack>
                    <Flex className='navbar_flex_button'>
                        <Button
                            variant={"ghosted"}
                            colorScheme={"blue"}
                            size={["xs", "sm"]}
                            mr={4}
                        >
                            {!user ? (
                                <RouterLink to={"/login"}>LOG IN</RouterLink>
                            ) : (
                                <Text>{user}</Text>
                            )}
                        </Button>
                        <Button
                            variant={"outline"}
                            color={"blue.400"}
                            borderColor={"blue.400"}
                            borderRadius={"sm"}
                            _hover={{ color: "white", bg: "blue.400" }}
                            size={["xs", "sm"]}
                            mr={4}
                            px={7}
                            py={5}
                        >
                            <RouterLink to={"/signup"}>SIGN UP FREE</RouterLink>
                        </Button>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: "none" }}>
                        <Stack as={"nav"} spacing={4}>
                            {links.map((link) => (
                                <Links key={link}>{link}</Links>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </div>
    )
}

export default Navbar