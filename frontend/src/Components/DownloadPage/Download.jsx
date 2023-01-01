import React from 'react'
import "./Download.css"
import { Box, Flex,Button, Heading, Badge, Tooltip, Text, ListItem, UnorderedList, VStack, ListIcon, Image } from "@chakra-ui/react"
import { GoPrimitiveDot } from "react-icons/go"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';




const DownloadAppStore = [
    "Chrome",
    "Firefox",
    "Edge",
    "Mac",
    "Windows",
    "Linux",
    "Android",
    "iOS",
]


const hoverText = [
    {
        name: "Idle detection",
        span: "Stop Timer from Tracking time you speed away fron your computer",
    },
    {
        name: " Auto start/stop",
        span: "Automatically start or stop the timer when you turn on your computer or browser.",
    },
    {
        name: " Offline mode",
        span: "Track time even while offline.",
    },
    {
        name: " Default project",
        span: "Automatically preselect a project a project when starting a timer",
    },
    {
        name: "Reminders",
        span: "Get notification when you forgot to start a timer.",
    },
    {
        name: "Pomodoro timer",
        span: "Get notification when its time to take a break;"
    },
    {
        name: "Auto tracker",
        span: "Track how much time you spend in other apps in your computer.",
    },
    {
        name: "Expenses",
        span: "Record your Expenses and attach receipts",
    },
    {
        name: "Time off",
        span: "Request time off and see your balance.",
    },
]


const imgeSection = [
    {
        img: "https://clockify.me/assets/images/clockify-apps-extension.png",
        name: "Browser extension",
        innerText: "Track time via extension.",
        groupLogo: [
            "https://clockify.me/assets/images/chrome-store.svg",
            "https://clockify.me/assets/images/firefox-store.svg",
            "https://clockify.me/assets/images/edge-store.svg",
        ],
    },

    {
        img: "https://clockify.me/assets/images/clockify-apps-desktop.png",
        name: "Desktop app",
        innerText: "Track time on your computer.",
        groupLogo: [
            "https://clockify.me/assets/images/download-app-mac.svg",
            "https://clockify.me/assets/images/download-app-windows.svg",
            "https://clockify.me/assets/images/download-app-linux.svg",
        ],
    },

    {
        img: "https://clockify.me/assets/images/clockify-apps-mobile.png",
        name: "Mobile app",
        innerText: "Track time and expenses on your phone.",
        groupLogo: [
            "https://clockify.me/assets/images/app-store-ios.svg",
            "https://clockify.me/assets/images/play-store-android.svg",
        ],
    },

    {
        img: "https://clockify.me/assets/images/clockify-apps-kiosk.png",
        name: "Kiosk",
        innerText: "Set up a shared time clock kiosk on any device.",
        tag: ["TABLET", "PHONE", "COMPUTER"],
        button: "Learn more",
    },

    {
        img: "https://clockify.me/assets/images/pumble-apps.png",
        name: "Chat app",
        innerText: "Chat via Pumble app (desktop and mobile).",
        groupLogo: [
            "https://clockify.me/assets/images/app-store-ios.svg",
            "https://clockify.me/assets/images/play-store-android.svg",
            "https://clockify.me/assets/images/download-app-mac.svg",
            "https://clockify.me/assets/images/download-app-windows.svg",
        ],
    },
]


const Download = () => {
  const token = useSelector((store) => store.auth.token);

    return (
      <div>
        <Box align={'center'}>
          <Box
            display={'flex'}
            justifyContent={'center'}
            fontSize={'4xl'}
            mt={'5rem'}
            gap={'2'}
          >
            <Heading
              fontWeight={'400'}
              size={['lg', '2xl']}
              color={'gray.600'}
              pt="2"
              pb="8"
            >
              Time tracking apps
            </Heading>
          </Box>
          <Text
            fontWeight={400}
            style={{ letterSpacing: '1px' }}
            color={'gray.600'}
            fontSize={'lg'}
          >
            Install Clockify and track time from anywhere — everything is synced
            online.
          </Text>

          <Box>
            <Box pt="3" pb="3">
              <Box
                display={'flex'}
                justifyContent={'center'}
                gap={['2', '3', '5']}
                p={'2'}
                flexWrap={'wrap'}
              >
                {DownloadAppStore?.map((el) => (
                  <UnorderedList key={el}>
                    <ListItem
                      className="download_list"
                      color={'#03a9f4'}
                      fontWeight={'600'}
                      fontSize={['1rem', '1.1rem', '1.2rem']}
                      cursor={'pointer'}
                      _hover={{ textDecoration: 'underline' }}
                    >
                      {/* <ListIcon as={GoPrimitiveDot} mt={-1} size={16} color={"black"}/> */}
                      {el}
                    </ListItem>
                  </UnorderedList>
                ))}
              </Box>
            </Box>

            <Box w={['20rem', '35rem', '50rem']}>
              {hoverText.map((el) => (
                <Tooltip
                  key={el}
                  label={el.span}
                  hasArrow
                  placement="top"
                  bg="black"
                  color="#fff"
                >
                  <Badge
                    bg="#e1f5fe"
                    _hover={{ bg: '#03a9f4', color: '#fff' }}
                    ml={'3'}
                    mt="2"
                    p={1}
                    fontSize={'0.7rem'}
                    fontFamily={'sans-serif'}
                    color="grey"
                    cursor={'pointer'}
                  >
                    {el.name}
                  </Badge>
                </Tooltip>
              ))}
            </Box>
            <VStack justifyContent="center">
              {imgeSection?.map(
                (
                  { name, img, innerText, groupLogo, tag, button },
                  index,
                  el
                ) => (
                  <Box key={index} w={['20rem', '45rem', '53rem']}>
                    <Box
                      display={'flex'}
                      flexWrap={'wrap'}
                      justifyContent={'space-between'}
                      alignItems={'center'}
                      textAlign={'start'}
                      mt="6rem"
                      mb="6rem"
                    >
                      <Box display="flex" margin="auto" justifyContent="center">
                        <Image
                          src={img}
                          className={'download_img'}
                          mr={'1rem'}
                        />
                      </Box>
                      <Box className={'download_box'}>
                        <Box>
                          <Text fontSize={'3xl'}> {name}</Text>
                          <Text pt="2" pb="5">
                            {innerText}
                          </Text>
                          <Box display={'flex'} gap={'3'} pt="2" pb="2">
                            {tag?.map((el) => (
                              <UnorderedList key={el}>
                                <ListItem color={'grey'}>{el}</ListItem>
                              </UnorderedList>
                            ))}
                          </Box>
                          {button ? (
                            <Text
                              className="download_text"
                              color={'blue'}
                              fontSize={'1xl'}
                            >
                              Lern more
                            </Text>
                          ) : null}
                        </Box>

                        <Box
                          className={'download_app'}
                          display="flex"
                          flexWrap="wrap"
                          width={['20rem', '25rem', '25rem']}
                          gap="5"
                        >
                          {groupLogo?.map((el) => (
                            <Image
                              key={el}
                              src={el}
                              className={'download_icon'}
                              _hover={{
                                transform: 'scale(1.1)',
                                cursor: 'pointer',
                              }}
                            />
                          ))}
                        </Box>
                      </Box>
                    </Box>
                    <div
                      style={{
                        width: '100%',
                        height: '1px',
                        backgroundColor: '#fdecec',
                      }}
                    ></div>
                  </Box>
                )
              )}
            </VStack>
          </Box>
        </Box>
        <div
          style={{
            background: 'linear-gradient(#e8f5fd,#ffff)',
            padding: '4rem',
          }}
        >
          <Heading
            mt={20}
            mb={2}
            textAlign={'center'}
            fontWeight={'400'}
            size={['lg', 'xl']}
            color={'gray.600'}
          >
            Start tracking time with Clockify
          </Heading>
          <Text textAlign={'center'} fontSize={['xs', 'sm']} color={'gray'}>
            24/7 Support • Cancel Anytime • Free Forever
          </Text>
          <Flex flexDir={'column'} alignItems={'center'} mt={10}>
            <Button
              color={'white'}
              p={[1, 7]}
              boxShadow={'md'}
              _hover={{ bg: 'blue.400' }}
              bgColor={'#03A9F4'}
              borderBottom={'4px solid #008CCF'}
              w={'280px'}
              h={'56px'}
            >
              {token ? (
                <Text>Explore our Website 😄😃 </Text>
              ) : (
                <Link to="/signup">
                  <Text fontWeight={400} fontSize={['xs', 'md']}>
                    CREATE FREE ACCOUNT
                  </Text>
                </Link>
              )}
            </Button>
            <Button
              p={0}
              colorScheme={'none'}
              color={'blue.400'}
              _hover={{ textDecoration: 'underline' }}
            >
              <Image
                src={'https://clockify.me/assets/images/signed-up-icon.svg'}
              ></Image>
              <Text fontSize={'xs'} ml={'1'}>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  147,262 people signed up last month
                </a>
              </Text>
            </Button>
          </Flex>
        </div>
      </div>
    );
}

export default Download