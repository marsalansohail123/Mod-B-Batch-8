import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  FormLabel,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Textarea,
  Radio,
  RadioGroup,
  useToast,
} from "@chakra-ui/react";
import { loginUser, signUpUser } from "../../config/Firebase/firebaseMethods";

const LoginAndSignup = () => {
  // Toast
  const toast = useToast();
  // Password
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  //   Drawer
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();

  //   Signup

  //   SignUP Obj
  const [signUpData, setSignupData] = useState({});
  const [signUpRadioVal, setsSignUpRadioVal] = useState("male");

  const signUP = () => {
    signUpData.gender = signUpRadioVal;
    signUpData.country = "Pakistan";
    if (signUpData.password == signUpData.confirmPassword) {
      if (Object.values(signUpData).length >= 8) {
        alert("success");
        console.log(signUpData);
        signUpUser(signUpData)
          .then((res) => {
            toast({
              title: res,
              //   description: "We've created your account for you.",
              status: "success",
              duration: 2000,
              position: "bottom-left",
              isClosable: true,
            });
            onClose();
          })
          .catch((err) => console.log(err));
        // .then((res))
      } else {
        alert("Must fill all input fields");
      }
    } else {
      alert("pasword did not match");
    }
    // console.log(signUpData);
  };

  //   Login
  const [loginData, setLogindData] = useState({});
  const login = () => {
    // console.log(loginData.email);
    loginUser(loginData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Card
        sx={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CardHeader>
          <Heading size="md">Login</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Email
              </Heading>
              <Text pt="2" fontSize="sm">
                <Input
                  onChange={(e) =>
                    setLogindData({ ...loginData, email: e.target.value })
                  }
                  placeholder="Basic usage"
                />
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Password
              </Heading>
              <Text pt="2" fontSize="sm">
                <InputGroup size="md">
                  <Input
                    onChange={(e) =>
                      setLogindData({ ...loginData, password: e.target.value })
                    }
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Text>
            </Box>
            <Box>
              <Text pt="2" fontSize="sm" sx={{ display: "flex" }}>
                If you have'nt create your account yet, &nbsp;
                <Text color="teal" cursor="pointer" onClick={onOpen}>
                  Create your account now
                </Text>
              </Text>
            </Box>
            <Box>
              <Button colorScheme="teal" onClick={login} width="100%">
                Login
              </Button>
            </Box>
          </Stack>
        </CardBody>
      </Card>

      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Create a new account
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel htmlFor="username">First Name</FormLabel>
                <Input
                  onChange={(e) =>
                    setSignupData({
                      ...signUpData,
                      fisrtNsame: e.target.value,
                    })
                  }
                  ref={firstField}
                  id="username"
                  placeholder="Please enter first name "
                />
              </Box>
              <Box>
                <FormLabel htmlFor="username">Last Name</FormLabel>
                <Input
                  id="username"
                  placeholder="Please enter last name "
                  onChange={(e) =>
                    setSignupData({
                      ...signUpData,
                      lastName: e.target.value,
                    })
                  }
                />
              </Box>
              <Box>
                <FormLabel htmlFor="url">Email</FormLabel>
                <InputGroup>
                  <Input
                    type="url"
                    id="url"
                    onChange={(e) =>
                      setSignupData({
                        ...signUpData,
                        email: e.target.value + "@gmail.com",
                      })
                    }
                    placeholder="Please enter email"
                  />
                  <InputRightAddon>@gmail.com</InputRightAddon>
                </InputGroup>
              </Box>

              <Box>
                <FormLabel htmlFor="username">Password</FormLabel>
                <Input
                  id="username"
                  type="password"
                  placeholder="Please enter password"
                  onChange={(e) =>
                    setSignupData({
                      ...signUpData,
                      password: e.target.value,
                    })
                  }
                />
              </Box>
              <Box>
                <FormLabel htmlFor="username">Confirm Password</FormLabel>
                <Input
                  id="username"
                  type="password"
                  placeholder="Please enter password"
                  onChange={(e) =>
                    setSignupData({
                      ...signUpData,
                      confirmPassword: e.target.value,
                    })
                  }
                />
              </Box>
              <Box>
                <FormLabel htmlFor="owner">Select City</FormLabel>
                <Select
                  onChange={(e) =>
                    setSignupData({
                      ...signUpData,
                      city: e.target.value,
                    })
                  }
                  id="owner"
                  defaultValue="Karachi"
                >
                  <option value="karachi">Karachi</option>
                  <option value="lahore">Lahore</option>
                  <option value="peshawar">Peshawar</option>
                  <option value="quette">Quetta</option>
                  <option value="multan">Multan</option>
                </Select>
              </Box>
              <Box>
                <FormLabel htmlFor="owner">Select Country</FormLabel>
                <Select id="owner" defaultValue="Pakistan">
                  <option value="pakistan" selected disabled>
                    Pakistan
                  </option>
                </Select>
              </Box>
            </Stack>
            <br />
            <Box>
              <FormLabel htmlFor="username">Select Gender</FormLabel>
              <RadioGroup
                onChange={setsSignUpRadioVal}
                value={signUpRadioVal}
                defaultValue="male"
              >
                <Stack spacing={5} direction="row">
                  <Radio colorScheme="teal" value="male">
                    Male
                  </Radio>
                  <Radio colorScheme="teal" value="female">
                    Female
                  </Radio>
                </Stack>
              </RadioGroup>
            </Box>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={signUP}>
              Submit
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default LoginAndSignup;
