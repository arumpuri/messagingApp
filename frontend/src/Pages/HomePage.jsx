import { Container, Box, Text,Tabs, TabList,Tab,TabPanels, TabPanel } from "@chakra-ui/react"
import Login from "../component/Authentication/Login"
import SignUp from "../component/Authentication/SignUp"
const HomePage = () => {
  return (
    <>
    <Container maxW="xl" centerContent>
    <Box
      d="flex"
      justifyContent="center"
      p={3}
      bg={"white"}
      w="100%"
      m="40px 0 15px 0"
      borderRadius="lg"
      borderWidth="1px">
        <Text fontSize="4xl" fontFamily="Work sans" color="black" >App Chat</Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
      <Tabs variant='soft-rounded' colorScheme='green'>
  <TabList mb="1em">
    <Tab width="50%">Login</Tab>
    <Tab width="50%">Sign Up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Login/>
    </TabPanel>
    <TabPanel>
      <SignUp/>
    </TabPanel>
  </TabPanels>
</Tabs>
      </Box>
    </Container>
    </>
  )
}

export default HomePage