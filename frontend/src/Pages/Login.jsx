import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setpass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const handleClick = () => {
    const payload = {
      email,
      pass,
    };
    axios
      .post("https://clear-gaiters-hen.cyclic.app/users/login", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => res.data)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", JSON.stringify(data.token));
          localStorage.setItem("user", JSON.stringify(data.user));
          navigate("/");
          toast({
            title: "Login Successful",
            position: "top",
            status: "success",
            duration: 1000,
            isClosable: true,
          });
        }
      })
      .catch((err) => {
        toast({
          title: "Login Failed",
          position: "top",
          status: "error",
          duration: 1000,
          isClosable: true,
        });
      });
  };

  return (
    <>
      <Navbar />
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        backgroundSize={"cover"}
        backgroundImage={
          "https://cdn.pixabay.com/photo/2017/02/01/18/32/pocket-watch-2031021_1280.jpg"
        }
      >
        <Stack
          spacing={8}
          mx={"auto"}
          maxW={"lg"}
          py={12}
          px={6}
          backgroundColor={"rgba(255, 255, 255, 0.300)"}
        >
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} color={"red.400"}>
              Sign in to your account
            </Heading>
            <Text fontSize={"lg"} color={"cyan"}>
              to enjoy all of our cool{" "}
              <Link color={"brown.400"} href="/">
                features
              </Link>{" "}
              ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="pass">
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPass ? "text" : "password"}
                    value={pass}
                    onChange={(e) => setpass(e.target.value)}
                  />
                  <InputRightElement h={"full"} type="password">
                    <Button
                      variant={"ghost"}
                      onClick={() => setShowPass((showPass) => !showPass)}
                    >
                      {showPass ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot pass?</Link>
                </Stack>
                <Button
                  onClick={handleClick}
                  loadingText="Submitting"
                  size="lg"
                  bg={"#df9018"}
                  color={"white"}
                  _hover={{
                    bg: "pink.500",
                  }}
                >
                  Sign In
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Create an account?{" "}
                  <Link color={"blue.400"} href="/signup">
                    Sign Up
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
