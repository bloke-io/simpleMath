import { Flex, HStack, Input, Text, VStack } from "@chakra-ui/react";
import { ChangeEventHandler, useState } from "react";
import Image from 'next/image';

export const Addition = (props) => {
    const [firstOperand, setFirstOperand] = useState<number>(0);
    const [secondOperand, setSecondOperand] = useState<number>(0);
    const [result, setResult] = useState<number>(0);

    const handleFirstOperand: ChangeEventHandler<HTMLInputElement> = (e) => {
        if(parseInt(e.target.value) > 20){
            alert("Не се дозволени примери со цифри поголеми од 20");
            return;
        }
        if(e.target.value == ""){
            setFirstOperand(0);
            if(secondOperand == 0)
                setResult(0);
        }
        setFirstOperand(parseInt(e.target.value));
        
        if(secondOperand && secondOperand > 0)
            setResult(parseInt(e.target.value) + secondOperand);
    }

    const handleSecondOperand: ChangeEventHandler<HTMLInputElement> = (e) => {
        if(parseInt(e.target.value) > 20){
            alert("Не се дозволени примери со цифри поголеми од 20");
            return;
        }
        if(e.target.value == ""){
            setSecondOperand(0);
            if(firstOperand == 0)
            setResult(0);
        }
        setSecondOperand(parseInt(e.target.value));

        if(firstOperand && firstOperand > 0)
            setResult(firstOperand + parseInt(e.target.value));
    }

    return (
        <Flex w="full" justifyContent="center" pt="2rem">
            <VStack w="full" height="full">
                <HStack w="75%" spacing={8} justifyContent="space-between">
                    <VStack>
                        <Text>Прв собирок</Text>
                        <Input
                        onChange={handleFirstOperand}/>
                    </VStack>
                    <VStack>
                        <Text>Втор собирок</Text>
                        <Input
                        onChange={handleSecondOperand}/>
                    </VStack>
                </HStack>
                <HStack w="75%" mt="1rem" spacing={8} justifyContent="space-between">
                    <Flex direction="row" wrap="wrap" w="75%"> 
                        {firstOperand > 0 && [...Array(firstOperand)].map((e, i) => 
                        <Image key={i} width="30vh" height="30vh" src={props.imgUrl} />)
                        }
                    </Flex>
                    <Flex direction="row" w="75%" justifyContent="center">
                    <Text fontSize="4xl" ml="1rem" mr="1rem" >+</Text>
                    </Flex>
                    <Flex direction="row" ml="5rem" wrap="wrap" w="75%"> 
                        {secondOperand > 0 && [...Array(secondOperand)].map((e, i) => 
                        <Image key={i} width="30vh" height="30vh" src={props.imgUrl} />)
                        }
                    </Flex>
                </HStack>
                <HStack w="75%" pt="4rem" justifyContent="center">
                    <Text>
                       Резултатот е {result}
                    </Text>
                </HStack>
                <HStack w="75%" mt="1rem" spacing={8} justifyContent="center">
                <Flex direction="row" wrap="wrap" w="75%" justifyContent="center"> 
                        {result > 0 && [...Array(result)].map((e, i) => 
                        <Image key={i} width="30vh" height="30vh" src={props.imgUrl} />)
                        }
                    </Flex>
                </HStack>
            </VStack>
        </Flex>
    )
};