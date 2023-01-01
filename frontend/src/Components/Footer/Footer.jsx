import React from 'react';
import {
  Box,
  Container,
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsGlobe } from 'react-icons/bs';
import { useSelector } from 'react-redux';

const Footer = () => {
  const token = useSelector((store) => store.auth.token);

  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      mt={20}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}
        >
          <Stack spacing={3}>
            <Box>
              <Link to={'/'}>
                <Image src="https://clockify.me/assets/images/clockify-logo.svg"></Image>
              </Link>
              <Text fontSize={'xs'} w={'15rem'}>
                The world's leading time tracker and timesheet software for
                teams
              </Text>
            </Box>
            {token ? (
              <Text>Welcome to our Website 👩‍💻 </Text>
            ) : (
              <Text fontSize={'sm'} _hover={{ color: 'blue.400' }}>
                <Link to={'/signup'}>SIGN UP FREE</Link>
              </Text>
            )}

            {token ? (
              <Text> Happy to Track your time 🥰</Text>
            ) : (
              <Text fontSize={'sm'} _hover={{ color: 'blue.400' }}>
                <Link to={'/login'}>LOG IN</Link>
              </Text>
            )}
          </Stack>
          <Stack align={'flex-start'}>
            <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
              PRODUCT
            </Text>
            <Link to="/">Features</Link>
            <Link to="/">Download</Link>
            <Link to="/">Integrations</Link>
            <Link to="/">Upgrade</Link>
            <Link to="/">API</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
              SOLUTION
            </Text>
            <Link to="/">Time clock</Link>
            <Link to="/">Timecard calculator</Link>
            <Link to="/">Timesheet</Link>
            <Link to="/">Reporting</Link>
            <Link to="/">Scheduling</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
              COMPANY
            </Text>
            <Link to="/">About us</Link>
            <Link to="/">Customers</Link>
            <Link to="/">
              <Text fontSize={'xs'}>WE ALSO MAKE</Text>
            </Link>
            <HStack>
              <Image src="https://clockify.me/assets/images/pumble-icon-color.svg"></Image>
              <Link to="/">Pumble</Link>
            </HStack>
            <HStack>
              <Image src="https://clockify.me/assets/images/plaky-icon-color.svg"></Image>
              <Link to="/">Plaky</Link>
            </HStack>
          </Stack>
          <Stack align={'flex-start'}>
            <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
              SUPPORT
            </Text>
            <Link to="/">Help</Link>
            <Link to="/">Tutorials</Link>
            <Link to="/">Resources</Link>
            <Link to="/">Blog</Link>
            <Link to="/">Contact</Link>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexWrap={'wrap'}
        width="100%"
        px={20}
        mb={5}
      >
        <Flex gap={4} m={'flex-start'}>
          <Text _hover={{ cursor: 'pointer' }}>© 2022 Clockify</Text>
          <Text _hover={{ cursor: 'pointer' }}>Sitemap</Text>
          <Text _hover={{ cursor: 'pointer' }}>Cookies</Text>
          <Text _hover={{ cursor: 'pointer' }}>Terms</Text>
          <Text _hover={{ cursor: 'pointer' }}>Privacy</Text>
        </Flex>
        <Flex gap={4} align={'right'}>
          <Link to="/">
            <AiOutlineTwitter />
          </Link>
          <Link to="/">
            {' '}
            <BsFacebook />
          </Link>
          <Link to="/">
            {' '}
            <FaInstagramSquare />
          </Link>
          <Link to="/">
            {' '}
            <AiFillYoutube />
          </Link>
          <Link to="/">
            {' '}
            <AiFillLinkedin />
          </Link>
        </Flex>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        px={20}
        pb={20}
      >
        <Flex gap={4} m={'flex-start'}>
          <Text fontSize={'14px'}>
            COING Inc, 2100 Geng Road, Suite 210, Palo Alto, CA 94303, USA,
            +1-855-738-8741
          </Text>
        </Flex>
        <Flex gap={4} align={'right'}>
          <BsGlobe />
          <Text>English</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
