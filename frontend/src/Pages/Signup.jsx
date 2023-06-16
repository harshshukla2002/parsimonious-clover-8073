import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  useToast,

} from "@chakra-ui/react";
import { useState} from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";
export default function Signup() {
  const [email, setEmail] = useState("");
 
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [pass, setPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const toast=useToast();

  const handleClick=() => {
      if(!email || !name || !gender || !age || !pass){
        toast({
          title:"Please fill all the fields",
          position:"top",
          status:"error",
          duration:1000,
          isClosable:true
        })
      }else{
        const payload={
          email,
          name,
          gender,
          age,
          pass
      }

      axios.post("http://localhost:4500/users/register",payload,{
          headers:{
              "Content-Type":"application/json"
          }
      }).then((res)=>{
          toast({
              title:"Signup Successful",
              position:"top",
              status:"success",
              duration:1000,
              isClosable:true
          })
      })
      }
        
  }
  return (
    <Box bg={useColorModeValue("gray.50", "gray.800")}>
      
      <Flex
        minH={"100vh"}
        
        align={"center"}
        justify={"center"}
        backgroundSize={"cover"}
        backgroundImage={
          "https://cdn.pixabay.com/photo/2018/02/16/02/03/pocket-watch-3156771_1280.jpg"
        }
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6} backgroundColor={"rgba(255, 255, 255, 0.300)"}>
          <Stack align={"center"}>
            <Heading
              fontSize={"4xl"}
              textAlign={"center"}
              color={"saddlebrown "}
            >
              Sign up
            </Heading>

            <Text fontSize={"lg"} color={"gray.600"}>
              Welcome to Pomodoro Tracker ✌️
            </Text>
          </Stack>

          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
            <Box>
                  <FormControl id="Name">
                    <FormLabel>Name</FormLabel>
                    <Input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </FormControl>
                </Box>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <HStack>
                <Box>
                  <FormControl id="gender" isRequired>
                    <FormLabel>Gender</FormLabel>
                    <Input
                      type="text"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="age" isRequired>
                    <FormLabel>Age</FormLabel>
                    <Input
                      type="text"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </FormControl>
                </Box>
              </HStack>

              <FormControl id="pass" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPass ? "text" : "password"} 
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                  />

                  <InputRightElement h={"full"} type="password">
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPass((showPass) => !showPass)
                      }
                    >
                      {showPass ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"#df9018"}
                  color={"white"}
                  _hover={{
                    bg: "pink.500",
                  }}
                  onClick={handleClick}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?{" "}
                  <Link color={"blue.400"} href="/login">
                    Login
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
}
