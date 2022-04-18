import {
  Flex,
  VStack,
  HStack,
  Text,
  Input,
  NumberInput,
  NumberInputField,
  FormControl,
  Button,
  useToast,
} from "@chakra-ui/react";
import { ChangeEventHandler, FormEvent, useState } from "react";
import Image from "next/image";
import { getRandomInt } from "../utils";

export const Subtraction = (props) => {
  const toast = useToast();

  const [firstOperand, setFirstOperand] = useState<number>(0);
  const [secondOperand, setSecondOperand] = useState<number>(0);
  const [result, setResult] = useState<number>(getRandomInt(20) || 1);

  const guess = (e: FormEvent) => {
    e.preventDefault();

    if (firstOperand - secondOperand === result) {
      toast({
        title: "Браво! Погодивте!",
        status: "success",
        position: "top",
        isClosable: true,
      });
      setResult(getRandomInt(30) || 1);
      setFirstOperand(0);
      setSecondOperand(0);
    } else {
      toast({
        title: "Погрешивте! Пробајте пак",
        status: "error",
        position: "top",
        isClosable: true,
      });
    }
  };

  return (
    <Flex w="full" justifyContent="center" pt="2rem">
      <VStack w="full" height="full">
        <form id="guess" onSubmit={guess}>
          <HStack w="100%" spacing={8} justifyContent="space-between">
            <VStack>
              <FormControl isRequired>
                <Text>Намаленик</Text>
                <NumberInput isRequired value={firstOperand || ""} min={0}>
                  <NumberInputField
                    onChange={(e) =>
                      setFirstOperand(parseInt(e.target.value) || 0)
                    }
                  />
                </NumberInput>
              </FormControl>
            </VStack>
            <VStack w="full" h="full">
              <Button type="submit">
                <Text>Испрати одговор</Text>
              </Button>
            </VStack>
            <VStack>
              <Text>Намалител</Text>
              <NumberInput isRequired value={secondOperand || ""}>
                <NumberInputField
                  onChange={(e) =>
                    setSecondOperand(parseInt(e.target.value) || 0)
                  }
                />
              </NumberInput>
            </VStack>
          </HStack>
        </form>
        <HStack w="75%" mt="1rem" spacing={8} justifyContent="space-between">
          <Flex direction="row" wrap="wrap" w="75%">
            {firstOperand > 0 &&
              [...Array(firstOperand)].map((e, i) => (
                <Image key={i} width="30vh" height="30vh" src={props.imgUrl} />
              ))}
          </Flex>
          <Flex direction="row" w="75%" justifyContent="center">
            <Text fontSize="4xl" ml="1rem" mr="1rem">
              -
            </Text>
          </Flex>
          <Flex direction="row" ml="5rem" wrap="wrap" w="75%">
            {secondOperand > 0 &&
              [...Array(secondOperand)].map((e, i) => (
                <Image key={i} width="30vh" height="30vh" src={props.imgUrl} />
              ))}
          </Flex>
        </HStack>
        <HStack w="75%" pt="4rem" justifyContent="center">
          <Text>Резултатот е {result}</Text>
        </HStack>
        <HStack w="75%" mt="1rem" spacing={8} justifyContent="center">
          <Flex direction="row" wrap="wrap" w="75%" justifyContent="center">
            {result > 0 &&
              [...Array(result)].map((e, i) => (
                <Image key={i} width="30vh" height="30vh" src={props.imgUrl} />
              ))}
          </Flex>
        </HStack>
      </VStack>
    </Flex>
  );
};
