import {useEffect, useState} from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Button, Text, Heading, VStack, Box, HStack, Icon, Avatar, useToast } from '@chakra-ui/react'
import { BsHeartFill,BsHeart } from "react-icons/bs"
import { AiOutlineLike,AiFillLike } from "react-icons/ai";
import { data } from './data';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { feedbackget, feedbackpatch, feedbackpatchDislike } from '../Redux/FeedbackReducer/action';
export const IndiFeedback = ({_id,image,name,title,body,likes}) => {
    const toast = useToast()
    const dispatch = useDispatch()
    const [liked,setLiked] = useState(false)
    const [active, setActive] = useState(false);

    useEffect(() => {
      const data = JSON.parse(localStorage.getItem("key"));
      setActive(data);
    }, []);
  
    useEffect(() => {
      localStorage.setItem("key", active);
    }, [active]);


    const handleIncrease=()=>{
        console.log(likes)
        dispatch(feedbackpatch(_id,likes)).then(()=>{
            toast({
                title: 'You just liked a feedback!',
                description: "",
                status: 'success',
                duration: 4000,
                isClosable: true,
                position:"top"
            })
            setLiked(!liked)
        })
        setActive(!active)
    }


    const handleLikeDecrese=()=>{
        console.log(likes)
        dispatch(feedbackpatchDislike(_id,likes)).then(()=>{
            toast({
                title: 'You just unliked a feedback!',
                description: "",
                status: "error",
                duration: 4000,
                isClosable: true,
                position:"top"
            })
            setLiked(!liked)
        })
        setActive(!active)
    }
    return (
        <>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                h={"17vh"}
            >
                <VStack width={"70px"} h={"100px"} mt={"2vh"} ml={"2vw"}>
                    {
                        image ? 
                        <Image
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '50px' }}
                        src={image}
                        alt='Caffe Latte'
                        />
                        :
                        <Avatar bg='teal.500' />
                    }
                    
                    <Text align={"center"} fontSize={"xs"}>{name}</Text>
                </VStack>

                <HStack pos={"relative"} left={"2vw"} gap={5} >
                    <VStack  width={"41vw"} gap={0} align={"start"}>
                        <Heading color={"#438ad0"} fontWeight={"normal"} size='md'>{title}</Heading>

                        <Text align={"start"} pt={"2px"}>
                            {body}
                        </Text>
                    </VStack>
                    <Box display={'flex'} >
                        {
                            liked ?
                            <HStack  gap={1}>
                                <Icon cursor={"pointer"} as={AiFillLike} fill={"green"} h={5} w={7} alignSelf={'center'} onClick={handleLikeDecrese}  />
                                <Text color={"green"}>{likes}</Text>
                            </HStack>
                                
                                :
                                <HStack  gap={1}>
                                    <Icon cursor={"pointer"} as={AiOutlineLike} h={5} w={7} alignSelf={'center'} onClick={handleIncrease}/>
                                    <Text>{likes}</Text>
                                </HStack>
                        }

                    </Box>
                </HStack>
            </Card>
        </>
    )
}
