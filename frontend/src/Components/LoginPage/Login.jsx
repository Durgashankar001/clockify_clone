import {
  Box,
  Button,
  Checkbox,
  FormControl,
  Heading,
  Image,
  Input,
  Select,
  Text,
  useToast,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import styles from './login.module.css';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginAPI, Sigup_google } from '../../store/auth/auth.actions';

const Login = () => {
  const token = useSelector((store) => store.auth.token);
  const navigate = useNavigate();
  const [loginCreds, setLoginCreds] = useState({});
  const dispatch = useDispatch();
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };

  const handlesubmit = () => {
    dispatch(loginAPI(loginCreds, toast, navigate));
   
  };

  const handlegoogle = (e) => {
    e.preventDefault();
    dispatch(Sigup_google());
  };

  return (
    <div
      bgColor="
    #f2f6f8"
    >
      <Box
        className={styles.outerLogin}
        bg="whiteAlpha.400"
        w="75%"
        h="800px"
        color="white"
      >
        <Box
          className={styles.LoginNav}
          bg="white"
          w="100%"
          h="80px"
          p={5}
          color="white"
        >
          <RouterLink to={'/'}>
            <Image src="https://app.clockify.me/assets/logo.svg" h={35} />
          </RouterLink>
          <Box w="auto" display="flex">
            <Text color="blackAlpha.600">Don't have an account? </Text>
            <span>""</span>
            <RouterLink
              to={'/signup'}
              className={styles.links}
              fontWeight="light"
              bg="white"
              textDecoration="none"
            >
              Sign up
            </RouterLink>
          </Box>
        </Box>
        <Box>
          {/* Input container started */}
          <Box mt="80px">
            <FormControl
              className={styles.inputContainer}
              bgColor="white"
              width="32%"
              margin="auto"
              height="auto"
              p="30px"
            >
              <Heading color="black" fontSize="xl" fontWeight="600">
                {' '}
                Login
              </Heading>
              <Input
                name="email"
                onChange={handleChange}
                color="black"
                type="email"
                border="1px solid gray"
                mt="30px"
                h="40px"
                placeholder="Enter email"
                borderRadius="none"
                value={loginCreds.email}
              />

              <Input
                name="password"
                value={loginCreds.password}
                onChange={handleChange}
                type="password"
                color="black"
                border="1px solid gray"
                mt="20px"
                h="40px"
                placeholder="Choose password"
                borderRadius="none"
              />

              <Box display="flex" mt="15px" justifyContent="space-between">
                <Box display="flex">
                  <Checkbox />
                  <Text color="black" ml="10px">
                    Stay logged in
                  </Text>
                </Box>
                <Text className={styles.links}>Forget Password?</Text>
              </Box>
              <Button
                onClick={handlesubmit}
                mb="20px"
                mt="15px"
                h="40px"
                bgColor="#5cc7f8"
                w="100%"
                borderRadius="none"
              >
                LOG IN
              </Button>
              <Box display="flex" justifyContent="space-between">
                <hr width="45%" />
                <Text color="black" mt="-10px">
                  OR
                </Text>
                <hr width="45%" />
              </Box>

              <Button
                fontWeight="medium"
                mb="20px"
                mt="15px"
                h="40px"
                w="100%"
                bgColor="white"
                color="blackAlpha.600"
                border="1px solid gray"
                borderRadius="none"
                onClick={handlegoogle}
              >
                Continue with Google
              </Button>
            </FormControl>
          </Box>
          {/* Footer */}
          <Box>
            <Box mt="100px">
              <Box
                display="flex"
                mt="15px"
                m="auto"
                w="150px"
                border="1px solid"
              >
                <Image
                  m="auto"
                  w="20px"
                  h="20px"
                  src="https://seeklogo.com/images/G/globe-logo-42DE548AC7-seeklogo.com.png"
                />
                <Select color="black" border="none" m="auto" w="100px">
                  <option value="option1">English</option>
                  <option value="option2">Francais</option>
                  <option value="option3">Espanol</option>
                  <option value="option3">Portugues</option>
                  <option value="option3">Deutsch</option>
                </Select>
              </Box>
              <Box
                m="auto"
                mt="20px"
                alignSelf="center"
                width="300px"
                display="flex"
              >
                <Text color="black">Your data is safe with us: </Text>
                <Text ml="5px" className={styles.links}>
                  Security{' '}
                </Text>
                <Text ml="5px" className={styles.links}>
                  {' '}
                  Privacy
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Login;
