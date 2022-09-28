import React from 'react'
import { Box, Button, Checkbox, Heading, Image, Input, Select, Spacer, Text } from '@chakra-ui/react'
import styles from "./signup.module.css"
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div bgColor="
    #f2f6f8">
        <Box className={styles.outerSignup} bg='whiteAlpha.400' w='75%' h="800px" color='white'>
            <Box className={styles.signupNav} bg='white' w='100%' h="80px" p={5} color='white'>
                <Image src="https://app.clockify.me/assets/logo.svg" h={35}/>
                <Button color='blue' fontWeight="light" bg='white' textDecoration="none" >Log In</Button>
            </Box>
            <Box>
                <Box mt="40px">
                    <Heading color="black" fontSize="4xl" fontWeight="400" textAlign="center" mb="20px" >Get started with Clockify</Heading>
                    <Heading color="black" fontSize="xl" fontWeight="light" textAlign="center" mb="20px" >Create a free account to start tracking time and supercharge your productivity.</Heading>
                    <Box color="gray" fontWeight="light" display="flex" margin="auto" textAlign="center" width="350px">
                        <Text fontWeight="light" fontSize="md" mr="5px">No credit card required</Text>
                        <Text> . </Text>
                        <Text fontWeight="light" fontSize="md" ml="5px">Unsubscribe at any time</Text>
                    </Box>
                     
                </Box>
                {/* Input container started */}
                <Box mt="30px">
                    <Box bgColor="white" border="1px solid gray" width="32%" margin="auto" height="auto" p="30px" >
                        <Heading color="black" fontSize="xl" fontWeight="600"> Sign up</Heading>
                        <Input border="1px solid gray" mt="30px" h="40px" placeholder='Enter email' borderRadius="none" />
                        <Input border="1px solid gray" mt="20px" h="40px" placeholder='Choose password' borderRadius="none" />
                        <Box display="flex" mt="15px">
                            <Checkbox  />
                            <Text color="black" ml="10px">I agree to the <Link color='blue' >Terms of Use</Link></Text> 
                        </Box>
                        <Button  mb="20px" mt="15px" h="40px" bgColor="#5cc7f8" w="100%" borderRadius="none" >
                            CREATE FREE ACCOUNT</Button>
                        <Box display="flex" justifyContent="space-between">
                            <hr width="45%" /> 
                            <Text color="black" mt="-10px">OR</Text> 
                            <hr width="45%" /> 
                        </Box>

                        <Button fontWeight="medium" mb="20px" mt="15px" h="40px" w="100%" bgColor="white" color="blackAlpha.600" border="1px solid gray" borderRadius="none">
                            Continue with Google</Button>
                    </Box>
                
                </Box>
                {/* Footer */}
                <Box>
                    <Box mt="20px">
                        <Box display="flex" mt="15px" m="auto" w="150px" border="1px solid">
                            <Image m="auto" w="20px" h="20px" src='https://seeklogo.com/images/G/globe-logo-42DE548AC7-seeklogo.com.png'/>
                            <Select color="black" border="none" m="auto" w="100px" >
                                <option value='option1'>English</option>
                                <option value='option2'>Francais</option>
                                <option value='option3'>Espanol</option>
                                <option value='option3'>Portugues</option>
                                <option value='option3'>Deutsch</option>
                            </Select>
                        </Box>
                        <Box m="auto" mt="20px" alignSelf="center" width="300px" display="flex">
                            <Text color="black">Your data is safe with us: </Text>
                            <Text ml="5px" color="blue" >Security Privacy</Text>
                        </Box>
                    </Box>
                    </Box>

            </Box>
        </Box>
    </div>
  )
}

export default Signup