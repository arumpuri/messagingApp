import React, { useState } from "react";
import { VStack } from "@chakra-ui/layout";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Button } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  function handleChange(event) {
    console.log(event);
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }



  const handleSubmit = () => {

  }

  // const handleSubmit = async () => {
  //   setLoading(true);
  //   if (!email || !password) {
  //     toast({
  //       title: "Please fill all the fields",
  //       status: "warning",
  //       duration: 9000,
  //       isClosable: true,
  //       position: "bottom",
  //     });
  //     setLoading(false);
  //     return;
  //   }

  //   console.log(email, password);

  //   try {
  //     const config = {
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //     };
  //     const { data } = await axios.post(
  //       "api/user/login",
  //       { email, password },
  //       config
  //     );

  //     toast({
  //       title: "Login Succesfull",
  //       status: "Success",
  //       duration: 9000,
  //       isClosable: true,
  //       position: "bottom",
  //     });
  //     localStorage.setItem("userInfo", JSON.stringify(data));
  //     setLoading(false);
  //   } catch (error) {
  //     toast({
  //       title: "Error occured",
  //       description: error.response.data.message,
  //       status: "Error",
  //       duration: 9000,
  //       isClosable: true,
  //       position: "bottom",
  //     });
  //     setLoading(false);
  //   }
  // };
  const [show, setShow] = React.useState(false);
  const clickShow = () => setShow(!show);

  return (
    <VStack spacing="5px">
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter Your Email"
          type="text"
          onChange={handleChange}
          name="email"
          value={formData.email}
        ></Input>
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter Your Password"
            onChange={handleChange}
            name="password"
            value={formData.password}
          ></Input>
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={clickShow}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        colorScheme="teal"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={handleSubmit}
        isLoading={loading}
      >
        Submit
      </Button>
    </VStack>
  );
};

export default Login;
