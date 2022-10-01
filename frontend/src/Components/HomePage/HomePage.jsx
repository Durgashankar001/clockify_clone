import React from 'react'
import "./HomePage.css"
import {
    AspectRatio,
    Box,
    Button,
    ButtonGroup,
    Center,
    Divider,
    Flex,
    Heading,
    Icon,
    Image,
    List,
    ListIcon,
    ListItem,
    SimpleGrid,
    Stack,
    Switch,
    Text,
    VStack,
    Wrap,
    WrapItem
} from "@chakra-ui/react";
import { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiTargetLock } from "react-icons/bi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { RiTeamLine } from "react-icons/ri";
import { BsClockHistory } from "react-icons/bs";
import { GiCheckMark } from "react-icons/gi";
import Slider from './slider';


const row1 = [
    {
        title: "Great experience",
        feedback: "It has really helped me become more organized",
        client: "— Lauren Leonard, Illustrator",
    },
    {
        title: "A game-changer for remote work",
        feedback: "I can track my phone-a week taps and I'm ready to get into my work",
        client: "— Keri Mackay Coordinator",
    },
    {
        title: "It has greatly improved our business",
        feedback: "Before Clockify we had no idea of how long we were spending on each event.",
        client: "— Hilary Raeside, Excutive Assistant",
    },
    {
        title: "Grows with you",
        feedback: "I Love how clockify allows my contractors to independently log billable hours.",
        client: "— Camreon Sursa,enterpeneur",
    },
    {
        title: "An amazing experience!",
        feedback: "Works exactly like you'd hope, feature-rich, and has helped us realize profits.",
        client: "— Torre Capistran, Entrepreneur",
    },
    {
        title: "Affordable price and support",
        feedback: "New features appearing every month. Great and helpful customer support.",
        client: "— Maciej Tkaczyk, Manager",
    },
    {
        title: "Very useful and intuitive",
        feedback: "Extremely comfortable. Ads free. Amazing in terms of customer support.",
        client: "— Ivan Napolskykh, Software Engineer,",
    }
]

const row2 = [
    {
        title: "One of the best values available online",
        feedback: "Really good. Overall, this is a TREMENDOUS value for the price.",
        client: "— Patrick Carver, Entrepreneur",
    },
    {
        title: "Best time tracker",
        feedback: "Clockify has become a basic in my set of freelance tools.",
        client: "— Luis Miguel Rivas Zepeda, Software Engineer",
    },
    {
        title: "Seamless time tracking",
        feedback: "Clockify is so easy to use and intuitive. The learning curve is almost none.",
        client: "— Sheila Zayas, Graphic Design",
    },
    {
        title: "Clockify is scary good!",
        feedback: "It is a powerful and often frightening insight into your own behavior.",
        client: "— Skyler Bird, Web Designer",
    },
    {
        title: "Finally an intuitive online time logger",
        feedback: "I like that it is available to me online and can use it wherever I am.",
        client: "— Michele Wong, Entrepreneur",
    },

]

const row3 = [
    {
        title: "Works great for startups",
        feedback: "We grew from a couple people to almost 80 and it worked perfectly the whole time!",
        client: "— Zachary Gaskill, Sales Manager",
    },
    {
        title: "Fantastic",
        feedback: "Makes it incredibly easy to record time and attach pdf reports to invoices.",
        client: "— David Jackson, Consultant",
    },
    {
        title: "Best time tracking software!",
        feedback: "I use Clockify for work, but it also lets me know exactly what I am doing in my day!",
        client: "— Marc Wolfe, Marketing Manager",
    },
    {
        title: "Best timesheet software on the market",
        feedback: "Easy to use. Quick to maneuver. Excellent reporting and administration.",
        client: "— Anurag K, Database Engineer,",
    },
    {
        title: "Wonderful for tracking productivity",
        feedback: "I enjoy it so much I use outside of work to track my own personal self-development.",
        client: "— Jessup S, Operations Associate",
    },
    {
        title: "I feel more productive!",
        feedback: "It's really encouraging to look back and see how much I've accomplished!",
        client: "— Kristen Eisentrager, Creative Coordinator",
    },
]


const boxData = [
    {
        img: BiTargetLock,
        heading: "Boost productivity",
        text: "Track time you spend on activities, see where your time goes, and improve your time management skills.",
    },
    {
        img: AiOutlineDollarCircle,
        heading: "Bill clients",
        text: "Track billable time and expenses, show clients how much you've worked, see how much you've earned, and create invoices.",
    },
    {
        img: RiTeamLine,
        heading: "Manage team",
        text: "Track attendance for payroll and accounting, see who works on what, and manage workload among teams.",
    },
    {
        img: BsClockHistory,
        heading: "Business intelligence",
        text: "Track time and analyze your company's efficiency across projects, clients, departments, and employees.",
    },
]

const HomePage = () => {
    return (
        <div>
            <div>
                <div>
                    <Box maxW={["", "80%"]} m={"auto"}>
                        <Text fontSize={["2xl", "4xl"]} className="homepage_text">
                            The most popular free
                            <span className='homepage_text_span'> time tracker</span> for teams
                        </Text>
                    </Box>
                    <Box maxW={["80%", "45%"]} m={"auto"}>
                        <Text fontSize={["sm", "xl"]} textAlign={"center"}>
                            Time tracking software used by millions. Clockify is a time tracker
                            and timesheet app that lets you track work hours across projects.
                            Unlimited users, free forever.
                            <span className='homepage_text_span_star'>
                                <FaStar size={"18"} />
                                <FaStar size={"18"} />
                                <FaStar size={"18"} />
                                <FaStar size={"18"} />
                                <FaStarHalfAlt size={"18"} />
                                <Text
                                    fontSize={["xs", "sm"]}
                                    textAlign={"center"}
                                    color={"gray"}
                                    ml={"5"}>
                                    4,000+ reviews
                                </Text>
                            </span>
                        </Text>
                    </Box>
                </div>

                <div>
                    <Flex
                        justifyContent={"center"}
                        m={5}
                        flexDir={"column"}
                        alignItems={"center"}
                    >
                        <Button
                            className='homePage_heading_button'
                            p={[1, 7]}
                            boxShadow={"md"}
                            _hover={{ bg: "blue.400" }}
                            bgColor={"#03A9F4"} >
                            <Link to="/tracker">
                                <Text fontWeight={400} fontSize={["xs", "md"]}>
                                    START TRACKING TIME — IT'S FREE!
                                </Text>
                            </Link>
                        </Button>
                        <Button
                            p={0}
                            colorScheme={"none"}
                            color={"blue.400"}
                            _hover={{ textDecoration: "underline" }}>
                            <Image
                                src={"https://clockify.me/assets/images/signed-up-icon.svg"}
                            ></Image>
                            <Text fontSize={"xs"} ml={"1"}>
                                <a href="/" target="_blank">
                                    147,236 people signed up last month
                                </a>
                            </Text>
                        </Button>
                        <Image
                            src="https://clockify.me/assets/images/customers-light-gray-3.svg"
                            mt={10}
                        ></Image>
                        <Image src="https://clockify.me/assets/images/time-tracker-screenshot.svg" mt={10}></Image>

                        {/* <AspectRatio maxWidth={["auto", "auto", "1061"]} maxHight={["auto", "auto", "597"]} ratio={3 / 1.5}>
                        <iframe
                            width="1061"
                            height="597"
                            src="https://youtu.be/NMZhFs_b0Aw"
                            title="Clockify Tour"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen ></iframe>
                    </AspectRatio> */}
                    </Flex>
                </div>
            </div>
            <div style={{ backgroundColor: "#fff" }}>
                <VStack maxW={"xl"} m={"auto"} mt={20}>
                    <Text fontSize={["lg", "4xl"]}>Time management features</Text>
                    <Text fontSize={["md", "xl"]} color={"grey"} textAlign={"center"}>
                        Track productivity, attendance, and billable hours with a simple time tracker and timesheet.
                    </Text>
                </VStack>
                <SimpleGrid columns={[1, 2]} mt={20}>
                    <Flex flexDir={"column"} justifyContent={"left"} m={"auto"} gap={5}>
                        <Box>
                            <Heading size={"sm"} color={"gray"}>
                                TIMEKEEPING
                            </Heading>
                        </Box>
                        <Box
                            color={"gray.700"}>
                            <Heading mb={"1"} size={"sm"}>
                                <Flex className='box_img'>
                                    Timer
                                    <Image ml={2} className='img' src="https://clockify.me/assets/images/arrow-right-blue-circle-small.svg"></Image>
                                </Flex>
                            </Heading>
                            <Text color={"gray"} fontSize={"sm"}>
                                Track work hours in real time.
                            </Text>
                        </Box>
                        <Box
                            color={"gray.700"}>
                            <Heading mb={"1"} size={"sm"}>
                                <Flex className='box_img'>
                                    Timesheet
                                    <Image ml={2} className='img' src="https://clockify.me/assets/images/arrow-right-blue-circle-small.svg"></Image>
                                </Flex>
                            </Heading>
                            <Text color={"gray"} fontSize={"sm"}>
                                Enter time in weekly timesheet.
                            </Text>
                        </Box>
                        <Box
                            color={"gray.700"}>
                            <Heading mb={"1"} size={"sm"}>
                                <Flex className='box_img'>
                                    Calendar
                                    <Image ml={2} className='img' src="https://clockify.me/assets/images/arrow-right-blue-circle-small.svg"></Image>
                                </Flex>
                            </Heading>
                            <Text color={"gray"} fontSize={"sm"}>
                                Visually block out and manage time.
                            </Text>
                        </Box>
                        <Box
                            color={"gray.700"}>
                            <Heading mb={"1"} size={"sm"}>
                                <Flex className='box_img'>
                                    Auto tracker
                                    <Image ml={2} className='img' src="https://clockify.me/assets/images/arrow-right-blue-circle-small.svg"></Image>
                                </Flex>
                            </Heading>
                            <Text color={"gray"} fontSize={"sm"}>
                                Track apps and website you use.
                            </Text>
                        </Box>
                        <Box
                            color={"gray.700"} >
                            <Heading mb={"1"} size={"sm"}>
                                <Flex className='box_img'>
                                    Kiosk
                                    <Image ml={2} className='img' src="https://clockify.me/assets/images/arrow-right-blue-circle-small.svg"></Image>
                                </Flex>
                            </Heading>
                            <Text color={"gray"} fontSize={"sm"}>
                                Clock in from a shared device.
                            </Text>
                        </Box>
                    </Flex>
                    <Box m={"auto"}>
                        <Image src="https://clockify.me/assets/images/feature-time-tracker-methods.svg"></Image>
                    </Box>
                </SimpleGrid>
            </div>
            <div>
                <SimpleGrid columns={[1, 2]} mt={20}>
                    <Box m={"auto"}>
                        <Image src="https://clockify.me/assets/images/feature-time-reporting-activity.svg"></Image>
                    </Box>
                    <Flex flexDir={"column"} m={"auto"} justifyContent={"left"} gap={5}>
                        <Box>
                            <Heading size={"sm"} color={"gray"}>
                                REPORTING
                            </Heading>
                        </Box>
                        <Box
                            color={"gray.700"}>
                            <Heading mb={"1"} size={"sm"}>
                                <Flex className='box_img'>
                                    Reports
                                    <Image ml={2} className='img' src="https://clockify.me/assets/images/arrow-right-blue-circle-small.svg"></Image>
                                </Flex>
                            </Heading>
                            <Text color={"gray"} fontSize={"sm"}>
                                Analyze and export tracked time.
                            </Text>
                        </Box>
                        <Box
                            color={"gray.700"}>
                            <Heading mb={"1"} size={"sm"}>
                                <Flex className='box_img'>
                                    Activity
                                    <Image ml={2} className='img' src="https://clockify.me/assets/images/arrow-right-blue-circle-small.svg"></Image>
                                </Flex>
                            </Heading>
                            <Text color={"gray"} fontSize={"sm"}>
                                See who works on what.
                            </Text>
                        </Box>
                        <Box
                            color={"gray.700"}>
                            <Heading mb={"1"} size={"sm"}>
                                <Flex className='box_img'>
                                    Rates
                                    <Image ml={2} className='img' src="https://clockify.me/assets/images/arrow-right-blue-circle-small.svg"></Image>
                                </Flex>
                            </Heading>
                            <Text color={"gray"} fontSize={"sm"}>
                                See earnings, cost, and profit.
                            </Text>
                        </Box>
                        <Box
                            color={"gray.700"}>
                            <Heading mb={"1"} size={"sm"}>
                                <Flex className='box_img'>
                                    Progress
                                    <Image ml={2} className='img' src="https://clockify.me/assets/images/arrow-right-blue-circle-small.svg"></Image>
                                </Flex>
                            </Heading>
                            <Text color={"gray"} fontSize={"sm"}>
                                Track project estimates and budget.
                            </Text>
                        </Box>
                        <Box
                            color={"gray.700"}>
                            <Heading mb={"1"} size={"sm"}>
                                <Flex className='box_img'>
                                    Location
                                    <Image ml={2} className='img' src="https://clockify.me/assets/images/arrow-right-blue-circle-small.svg"></Image>
                                </Flex>
                            </Heading>
                            <Text color={"gray"} fontSize={"sm"}>
                                See visited sites and routes.
                            </Text>
                        </Box>
                    </Flex>

                </SimpleGrid>
            </div>
            <div>
                <SimpleGrid columns={[1, 2]} mt={20}>
                    <Flex flexDir={"column"} justifyContent={"left"} m={"auto"} gap={5}>
                        <Box>
                            <Heading size={"sm"} color={"gray"}>
                                MANAGEMENT
                            </Heading>
                        </Box>
                        <Box
                            color={"gray.700"}>
                            <Heading mb={"1"} size={"sm"}>
                                <Flex className='box_img'>
                                    Scheduling
                                    <Image ml={2} className='img' src="https://clockify.me/assets/images/arrow-right-blue-circle-small.svg"></Image>
                                </Flex>
                            </Heading>
                            <Text color={"gray"} fontSize={"sm"}>
                                Schedule work, assignments, and shifts.
                            </Text>
                        </Box>
                        <Box
                            color={"gray.700"}>
                            <Heading mb={"1"} size={"sm"}>
                                <Flex className='box_img'>
                                    Time off
                                    <Image ml={2} className='img' src="https://clockify.me/assets/images/arrow-right-blue-circle-small.svg"></Image>
                                </Flex>
                            </Heading>
                            <Text color={"gray"} fontSize={"sm"}>
                                Manage leaves and holidays.
                            </Text>
                        </Box>
                        <Box
                            color={"gray.700"}>
                            <Heading mb={"1"} size={"sm"}>
                                <Flex className='box_img'>
                                    Approval
                                    <Image ml={2} className='img' src="https://clockify.me/assets/images/arrow-right-blue-circle-small.svg"></Image>
                                </Flex>
                            </Heading>
                            <Text color={"gray"} fontSize={"sm"}>
                                Submit and approve timesheets.
                            </Text>
                        </Box>
                        <Box
                            color={"gray.700"}>
                            <Heading mb={"1"} size={"sm"}>
                                <Flex className='box_img'>
                                    Invoicing
                                    <Image ml={2} className='img' src="https://clockify.me/assets/images/arrow-right-blue-circle-small.svg"></Image>
                                </Flex>
                            </Heading>
                            <Text color={"gray"} fontSize={"sm"}>
                                Create invoices from billable time.
                            </Text>
                        </Box>
                        <Box
                            color={"gray.700"} >
                            <Heading mb={"1"} size={"sm"}>
                                <Flex className='box_img'>
                                    Expenses
                                    <Image ml={2} className='img' src="https://clockify.me/assets/images/arrow-right-blue-circle-small.svg"></Image>
                                </Flex>
                            </Heading>
                            <Text color={"gray"} fontSize={"sm"}>
                                Record project expenses and fees.
                            </Text>
                        </Box>
                    </Flex>
                    <Box m={"auto"}>
                        <Image src="https://clockify.me/assets/images/feature-team-scheduling.svg"></Image>
                    </Box>
                </SimpleGrid>
            </div>
            <Text textAlign={"center"} mt={"20"}>
                <Button
                    bgColor={"#03A9F4"}
                    h={"56px"}
                    w={"280px"}
                    className="home_page_seeFeatures_button"
                    _hover={{ bgColor: "blue.500" }}
                >
                    <Text color={"white"} fontWeight={"400"}>
                        SEE ALL FEATURES
                    </Text>
                </Button>
            </Text>
            <br />

            <div style={{ background: "#f7fcff", paddingTop: "1rem", paddingBottom: "5rem" }}>
                <VStack maxW={"xl"} m={"auto"} mt={20}>
                    <Text fontSize={["lg", "4xl"]} color={"gray.700"}>
                        Time tracking apps
                    </Text>
                    <Text color={"gray"} fontSize={["md", "xl"]} textAlign={"center"}>
                        Clockify works across devices. Track time from anywhere — all data is
                        synced online.
                    </Text>
                </VStack>
                <SimpleGrid
                    columns={[1, 2]}
                    width={"80%"}
                    m={"auto"}
                    mt={"10"}
                    gap={"20"}
                >
                    <VStack>
                        <Image mb={5} src="https://clockify.me/assets/images/time-tracking-app-desktop.png"></Image>
                        <Text fontWeight={"medium"} fontSize={"md"}>
                            DESKTOP APP
                        </Text>
                        <ButtonGroup
                            colorScheme={"none"}
                            color={"blue.400"}
                            variant={"outline"}
                            borderColor={"blue.400"}
                        >
                            <Button
                                borderRadius={"none"}
                                _hover={{ bgColor: "blue.400", color: "white" }}
                                w={"120px"}
                            >
                                Window
                            </Button>
                            <Button
                                borderRadius={"none"}
                                _hover={{ bgColor: "blue.400", color: "white" }}
                                w={"120px"}
                            >
                                Mac
                            </Button>
                            <Button
                                borderRadius={"none"}
                                _hover={{ bgColor: "blue.400", color: "white" }}
                                w={"120px"}
                            >
                                Linux
                            </Button>
                        </ButtonGroup>
                    </VStack>
                    <VStack>
                        <Image mb={5} src="https://clockify.me/assets/images/time-tracking-app-web.png"></Image>
                        <Text fontWeight={"medium"} fontSize={"md"}>
                            WEB APP
                        </Text>
                        <ButtonGroup
                            colorScheme={"none"}
                            color={"blue.400"}
                            variant={"outline"}
                            borderColor={"blue.400"}
                        >
                            <Button
                                borderRadius={"none"}
                                _hover={{ bgColor: "blue.400", color: "white" }}
                                w={"110px"}
                            >
                                Edge
                            </Button>
                            <Button
                                borderRadius={"none"}
                                _hover={{ bgColor: "blue.400", color: "white" }}
                                w={"110px"}
                            >
                                Chrome
                            </Button>
                            <Button
                                borderRadius={"none"}
                                _hover={{ bgColor: "blue.400", color: "white" }}
                                w={"110px"}
                            >
                                Firefox
                            </Button>
                        </ButtonGroup>
                    </VStack>
                </SimpleGrid>
                <SimpleGrid
                    columns={[1, 2]}
                    width={"80%"}
                    m={"auto"}
                    mt={20}
                    gap={"20"}
                >
                    <VStack>
                        <Image mb={5} src="https://clockify.me/assets/images/time-tracking-app-mobile.png"></Image>
                        <Text fontWeight={"medium"} fontSize={"md"}>
                            MOBILE APP
                        </Text>
                        <ButtonGroup
                            colorScheme={"none"}
                            color={"blue.400"}
                            variant={"outline"}
                            borderColor={"blue.400"}
                        >
                            <Button
                                borderRadius={"none"}
                                _hover={{ bgColor: "blue.400", color: "white" }}
                                w={"110px"}
                            >
                                Android
                            </Button>
                            <Button
                                borderRadius={"none"}
                                _hover={{ bgColor: "blue.400", color: "white" }}
                                w={"110px"}
                            >
                                iOS
                            </Button>
                        </ButtonGroup>
                    </VStack>
                    <VStack>
                        <Image mb={5} src="https://clockify.me/assets/images/time-tracking-app-kiosk.png"></Image>
                        <Text fontWeight={"medium"} fontSize={"md"}>
                            KIOSK APP
                        </Text>
                        <ButtonGroup
                            colorScheme={"none"}
                            color={"blue.400"}
                            variant={"outline"}
                            borderColor={"blue.400"}
                        >
                            <Button
                                borderRadius={"none"}
                                _hover={{ bgColor: "blue.400", color: "white" }}
                                w={"110px"}
                            >
                                Any device
                            </Button>
                        </ButtonGroup>
                    </VStack>
                </SimpleGrid>
            </div>


            <div>
                <Text textAlign={"center"} mt={"20"} fontSize={"4xl"} color={"gray.700"}>
                    Why track time with Clockify
                </Text>
                <SimpleGrid
                    w={[, "80%"]}
                    m={"auto"}
                    columns={{ base: "1", md: "2" }}
                    gap={"10"}
                    mt={20}
                >
                    {boxData.map((el) => {
                        return (
                            <Box m={"auto"} w={"85%"} pt={"40px"} pb={"50px"} pl={"50px"} pr={"50px"}
                                boxShadow="0 2px 6px 0 rgb(1 87 155 / 15%)"
                                style={{ transition: "all 0.1s ease-in" }}
                                cursor={"pointer"}
                                _hover={{ boxShadow: "2px 2px 5px 2px rgb(1 87 155 / 15%)" }}
                            >
                                <Flex justifyContent={"flex-start"} flexDir={"column"} gap={3}>
                                    <Icon as={el.img} w={"45px"} h={"44px"} color={"blue.400"} />
                                    <Heading fontWeight={400} size={"lg"} color={"gray.700"}>
                                        {el.heading}
                                    </Heading>
                                    <Text color={"gray"}>{el.text}</Text>
                                    <Link to={"/"}>
                                        <Text color={"blue.700"}>Learn more →</Text>
                                    </Link>
                                </Flex>
                            </Box>
                        );
                    })}
                </SimpleGrid>
            </div>

            <div style={{ marginTop: "2rem", width: "80%", margin: "auto" }}>
                <Text fontSize={13} m={"auto"} textAlign={"center"} color={"grey"} mt={20}>MORE USE CASES</Text>
                <div style={{ display: "block", margin: "auto" }}>
                    <Stack
                        direction='row'
                        align='center'
                        colorScheme={"none"}
                        variant={"outline"}
                        borderColor={"blue.400"}
                        w={"100%"}
                        m={"auto"}
                        mt={15}
                        mb={20}
                    >
                        <Wrap spacing={4}>
                            <WrapItem>
                                <Button
                                    variant='outline'
                                    colorScheme={"white"}
                                    color={"grey"}
                                    _hover={{ border: "blue.400", color: "blue.400" }}
                                    h={"30px"}
                                    py={"10px"}
                                // px={10}
                                >
                                    Time Clock
                                </Button>
                            </WrapItem>
                            <WrapItem>
                                <Button
                                    color={"grey"}
                                    variant='outline'
                                    colorScheme={"white"}
                                    _hover={{ border: "blue.400", color: "blue.400" }}
                                    h={"30px"}
                                    py={"10px"}
                                // px={10}
                                >
                                    Work Hours Tracker
                                </Button>
                            </WrapItem>
                            <WrapItem>
                                <Button
                                    color={"grey"}
                                    variant='outline'
                                    colorScheme={"white"}
                                    _hover={{ border: "blue.400", color: "blue.400" }}
                                    h={"30px"}
                                    py={"10px"}
                                // px={10}
                                >
                                    Employee Time Tracker
                                </Button>
                            </WrapItem>
                            <WrapItem>
                                <Button
                                    color={"grey"}
                                    variant='outline'
                                    colorScheme={"white"}
                                    _hover={{ border: "blue.400", color: "blue.400" }}
                                    h={"30px"}
                                    py={"10px"}
                                // px={10}
                                >
                                    Attendance Tracker
                                </Button>
                            </WrapItem>
                            <WrapItem>
                                <Button
                                    color={"grey"}
                                    variant='outline'
                                    colorScheme={"white"}
                                    _hover={{ border: "blue.400", color: "blue.400" }}
                                    h={"30px"}
                                    py={"10px"}
                                // px={10}
                                >
                                    Task Timer
                                </Button>
                            </WrapItem>
                            <WrapItem>
                                <Button
                                    color={"grey"}
                                    variant='outline'
                                    colorScheme={"white"}
                                    _hover={{ border: "blue.400", color: "blue.400" }}
                                    h={"30px"}
                                    py={"10px"}
                                // px={10}
                                >
                                    Time Card Calculator
                                </Button>
                            </WrapItem>
                        </Wrap>
                    </Stack>
                </div>

            </div>

            <div style={{ background: "#f7fcff", paddingTop: "5rem", paddingBottom: "3rem", letterSpacing: "2px" }}>
                <SimpleGrid
                    columns={{ base: "1", md: "2" }}
                    w={"50%"}
                    gap={[, 20]}
                    m={"auto"}
                    mt={20}
                    mb={20}
                >
                    <Image src="https://clockify.me/assets/images/free-forever-clock-4.svg"></Image>
                    <Flex flexDir={"column"} h={"60%"} m={"auto"} w={"100%"}>
                        <Heading color={"blue.400"} size={"4xl"}>
                            FREE
                        </Heading>
                        <Heading color={"blue.400"} size={"xl"}>
                            FOREVER!
                        </Heading>
                        <List mt={5}>
                            <ListItem>
                                <ListIcon as={GiCheckMark} color={"blue.400"} />
                                Unlimited uses
                            </ListItem>
                            <ListItem>
                                <ListIcon as={GiCheckMark} color={"blue.400"} />
                                Unlimited tracking
                            </ListItem>
                            <ListItem>
                                <ListIcon as={GiCheckMark} color={"blue.400"} />
                                Unlimited projects
                            </ListItem>
                        </List>
                        <Link to={"/"}>
                            {" "}
                            <Text mt={5} color={"blue.400"} _hover={{ textDecor: "underline" }}>
                                Upgrade →
                            </Text>{" "}
                        </Link>
                    </Flex>
                </SimpleGrid>

            </div>



            <div style={{ marginTop: "2rem", paddingTop: "1rem" }}>
                <Text textAlign={"center"} fontSize={"sm"} color={"gray"}>
                    #1 SUPPORT IN SOFTWARE
                </Text>
                <Heading
                    mt={2}
                    mb={2}
                    textAlign={"center"}
                    fontWeight={"400"}
                    size={["lg", "xl"]}
                    color={"gray.600"}
                >
                    World-class customer support
                </Heading>
                <Text textAlign={"center"} fontSize={["lg", "2xl"]} color={"gray"}>
                    We're here 24 hours a day, every day of the week, including holidays.
                </Text>
                <SimpleGrid
                    columns={{ base: "2", md: "4" }}
                    gap={[2, 7]}
                    w={["90%", "57%"]}
                    m={"auto"}
                    mt={10}
                >
                    <Flex alignItems={"flex-start"} gap={2}>
                        <Box>
                            <Image
                                mt={2}
                                src="https://clockify.me/assets/images/support-phone.svg"
                            ></Image>{" "}
                        </Box>
                        <Box>
                            <Heading fontWeight={"400"} size={["sm", "lg"]} color={"gray.600"}>
                                24/7
                            </Heading>
                            <Text color={"gray"} fontSize={["xs", "md"]}>
                                support anytime, anywhere
                            </Text>
                        </Box>
                    </Flex>
                    <Flex alignItems={"flex-start"} gap={2}>
                        <Box>
                            <Image
                                mt={2}
                                src="https://clockify.me/assets/images/support-mail.svg"
                            ></Image>{" "}
                        </Box>
                        <Box>
                            <Heading fontWeight={"400"} size={["sm", "lg"]} color={"gray.600"}>
                                1h
                            </Heading>
                            <Text color={"gray"} fontSize={["xs", "md"]}>
                                average response time
                            </Text>
                        </Box>
                    </Flex>
                    <Flex alignItems={"flex-start"} gap={2}>
                        <Box>
                            <Image
                                boxSize={"30px"}
                                mt={2}
                                src="https://clockify.me/assets/images/support-heart.svg"
                            ></Image>{" "}
                        </Box>
                        <Box>
                            <Heading fontWeight={"400"} size={["sm", "lg"]} color={"gray.600"}>
                                95%
                            </Heading>
                            <Text color={"gray"} fontSize={["xs", "md"]}>
                                satisfaction score (12k+ ratings)
                            </Text>
                        </Box>
                    </Flex>
                    <Flex alignItems={"flex-start"} gap={2}>
                        <Box>
                            <Image
                                mt={2}
                                src="https://clockify.me/assets/images/support-uptime.svg"
                            ></Image>
                        </Box>
                        <Box>
                            <Heading fontWeight={"400"} size={["sm", "lg"]} color={"gray.600"}>
                                99.99%
                            </Heading>
                            <Text color={"gray"} fontSize={["xs", "md"]}>
                                highest uptime levels
                            </Text>
                        </Box>
                    </Flex>
                </SimpleGrid>
                <Flex flexDir={"column"} alignItems={"center"} mt={10}>
                    <Button
                        w={"10rem"}
                        variant={"outline"}
                        color={"blue.400"}
                        fontWeight="400"
                        _hover={{ bgColor: "blue.400", color: "white" }}
                        borderRadius={"md"}
                        borderColor={"blue.400"}
                    >
                        Contact us
                    </Button>
                    <Text fontSize={"xs"} color={"gray"} mt={3}>
                        EMAIL • PHONE • CHAT
                    </Text>
                </Flex>

                <Divider mt={20} />
            </div>
            <div style={{ background: "#f7fcff", paddingTop: "3rem" }}>
                <Text textAlign={"center"} fontSize={"sm"} color={"gray"}>
                    #1 RATED SOFTWARE
                </Text>
                <Heading
                    mt={2}
                    mb={2}
                    textAlign={"center"}
                    fontWeight={"400"}
                    size={["lg", "xl"]}
                    color={"gray.600"}
                >
                    Join millions of happy users
                </Heading>
                <Text textAlign={"center"} fontSize={["lg", "xl"]} color={"gray"}>
                    Clockify is the best rated time tracking software with 4,000+ reviews.
                </Text>

                <Flex
                    wrap={"nowrap"}
                    overflowX={"hidden"}
                    justifyContent={"center"}
                    mt={10}
                    mb={10}
                    flexDir={"row"}
                >
                    <Box minW={"100%"} m={"auto"}>
                        <Image
                            maxW={"100%"}
                            src="https://clockify.me/assets/images/customer-feedback-logo-expanded-3.svg"
                        ></Image>
                    </Box>
                </Flex>
                <Slider data={row1} dir={"left"} />
                <Slider data={row2} dir={"right"} />
                <Slider data={row3} dir={"left"} />
            </div>
            <div>
                <Heading
                    mt={20}
                    mb={2}
                    textAlign={"center"}
                    fontWeight={"400"}
                    size={["lg", "xl"]}
                    color={"gray.600"}
                >
                    Start tracking time with Clockify
                </Heading>
                <Text textAlign={"center"} fontSize={["xs", "sm"]} color={"gray"}>
                    24/7 Support • Cancel Anytime • Free Forever
                </Text>
                <Flex flexDir={"column"} alignItems={"center"} mt={10}>
                    <Button
                        color={"white"}
                        p={[1, 7]}
                        boxShadow={"md"}
                        _hover={{ bg: "blue.400" }}
                        bgColor={"#03A9F4"}
                        borderBottom={"4px solid #008CCF"}
                        w={"280px"}
                        h={"56px"}
                    >
                        <Link to="/signup">
                            <Text fontWeight={400} fontSize={["xs", "md"]}>
                                CREATE FREE ACCOUNT
                            </Text>
                        </Link>
                    </Button>
                    <Button
                        p={0}
                        colorScheme={"none"}
                        color={"blue.400"}
                        _hover={{ textDecoration: "underline" }}>
                        <Image
                            src={"https://clockify.me/assets/images/signed-up-icon.svg"}
                        ></Image>
                        <Text fontSize={"xs"} ml={"1"}>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                147,262 people signed up last month
                            </a>
                        </Text>
                    </Button>
                </Flex>
            </div>
        </div>



    )
}

export default HomePage