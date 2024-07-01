import React, { useState } from "react";
import { VStack } from "@chakra-ui/layout";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Button } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate  } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = React.useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    pic: "",
  });
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  let history = useNavigate ();

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

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  // const handleSubmit = async () => {
  //   setLoading(true);
  //   if (!userName || !email || !password || confirmPassword) {
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
  //   if (password !== confirmPassword) {
  //     toast({
  //       title: "Password does not match",
  //       status: "warning",
  //       duration: 9000,
  //       isClosable: true,
  //       position: "bottom",
  //     });
  //     return;
  //   }

  //   try {
  //     const config = {
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //     };
  //     const { data } = await axios.post(
  //       "api/user",
  //       { userName, email, password, pic },
  //       config
  //     );
  //     toast({
  //       title: "registration Succesfull",
  //       status: "Success",
  //       duration: 9000,
  //       isClosable: true,
  //       position: "bottom",
  //     });

  //     localStorage.setItem("userInfo", JSON.stringify(data));

  //     setLoading(false);
  //     history.push("chats");
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

  const postPicture = (pic) => {};

  return (
    <VStack spacing="5px">
      <FormControl id="userName" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter Your User Name"
          type="text"
          onChange={handleChange}
          name="userName"
          value={formData.userName}
        ></Input>
      </FormControl>
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
      <FormControl id="confirmPassword" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            placeholder="Confirm Your Password"
            onChange={handleChange}
            name="confirmPassword"
            value={formData.confirmPassword}
          ></Input>
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={clickShow}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="pic" isRequired>
        <FormLabel>Upload Your Picture</FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => postPicture(e.target.files[0])}
          name="pic"
          value={formData.pic}
        ></Input>
      </FormControl>
      <Button
        colorScheme="teal"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </VStack>
  );
};

export default SignUp;
