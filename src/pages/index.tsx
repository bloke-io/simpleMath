import {
  Link as ChakraLink,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  HStack,
  VStack,
  Flex,
  SimpleGrid,
  Box
} from "@chakra-ui/react";

import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Addition } from "../components/Addition";
import { Subtraction } from "../components/Subtraction";
import { Multiplication } from "../components/Multiplication";
import { Divison } from "../components/Division";
import { useState } from "react";
import Image from "next/image";

// https://i.imgur.com/pQ8ZHGs.png

const FOODS = ['apple', 'broccoli', 'fried-egg', 'kiwi', 'lemon', 'lollipops', 'orange-juice', 'pizza', 'strawberry', 'icecream', 'burger', 'banana', 'potato', 'tomato'];

const Index = () => {
  const [foodLogo, setFoodLogo] = useState<string>(`/images/apple.png`);

  return (
    <Container height="100vh" pl="1rem" pr="1rem">
      <Text fontSize="4xl">SimpleMath Application</Text>
      <HStack width="full" height="full">
        <VStack width="20%" height="85%" boxShadow="dark-lg">
          <Flex
            direction="column"
            alignItems="center"
            justifyContent="flex-start"
            w="95"
            pb="1rem"
          >
            <Text mt="0.5rem">Одберете храна</Text>
            <SimpleGrid
              mt="1rem"
              columns={2}
              spacing={10}
              justifyContent="space-between"
            >
              {FOODS.map((food) => (
                <Box w="6vh" h="6vh" cursor="pointer" key={FOODS.indexOf(food)}>
                  <Image
                    width="100%"
                    height="100%"
                    src={`/images/${food}.png`}
                    onClick={e => setFoodLogo(`/images/${food}.png`)}
                    />
                </Box>
              ))}
            </SimpleGrid>
          </Flex>
        </VStack>
        <Tabs isFitted boxShadow="dark-lg" width="80%" height="85%" isLazy>
          <TabList>
            <Tab>Собирање</Tab>
            <Tab>Одземање</Tab>
            <Tab>Множење</Tab>
            <Tab>Делење</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Addition imgUrl={foodLogo}/>
            </TabPanel>
            <TabPanel>
              <Subtraction imgUrl={foodLogo} />
            </TabPanel>
            <TabPanel>
              <Multiplication imgUrl={foodLogo} />
            </TabPanel>
            <TabPanel>
              <Divison imgUrl={foodLogo} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </HStack>

      <DarkModeSwitch />
    </Container>
  );
};

export default Index;
