import {useState} from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Button, Text, Heading, VStack, Box, HStack, Icon, Avatar } from '@chakra-ui/react'
import { BsHeartFill,BsHeart } from "react-icons/bs"
import { AiOutlineLike,AiFillLike } from "react-icons/ai";
import { data } from './data';
export const IndiFeedback = ({id,image,name,title,body,likes}) => {
    const [liked,setLiked] = useState(false)
    const [count,setCount] = useState(+likes)
    // const handleIncrease=(id)=>{
    //     console.log(id)
    //     data.map((el)=>{
    //         if(el.id===id){
    //             return {...el,likes:el.likes+1}
    //         }
    //     })
    // }

    const handleLikeIncrease=()=>{
        setCount(count+1)
        setLiked(!liked)
    }

    const handleLikeDecrese=()=>{
        setCount(count-1)
        setLiked(!liked)
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
                    
                    <Text fontSize={"xs"}>{name}</Text>
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
                                <Text color={"green"}>{count}</Text>
                            </HStack>
                                
                                :
                                <HStack  gap={1}>
                                    <Icon cursor={"pointer"} as={AiOutlineLike} h={5} w={7} alignSelf={'center'} onClick={handleLikeIncrease}/>
                                    <Text>{count}</Text>
                                </HStack>
                        }

                    </Box>
                </HStack>
            </Card>
        </>
    )
}
