import { Box, Grid, GridItem, Icon } from '@chakra-ui/react'
import { useState,useEffect } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { FaLightbulb } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { IndiFeedback } from './IndiFeedback';
import { data } from './data';
import Form from './Form';
import { useDispatch, useSelector } from 'react-redux';
import { feedbackget } from '../Redux/FeedbackReducer/action';
export const Feedback = () => {
  const dispatch = useDispatch()
  const {feedback,isLoading} = useSelector(state=>{
      console.log(state)
      return {
        feedback:state.feedbackReducer.feedback,
        isLoading:state.feedbackReducer.isLoading
      }
  })

  useEffect(()=>{
    dispatch(feedbackget)
  },[])

  console.log(feedback)
  return (
    <>
      <Box margin={"auto"} width={"60vw"} >
        <Tabs isFitted>
          <TabList mb='1em'>
            <Tab><Icon as={GiCheckMark} h={4} w={6} pr={"5px"}/> Done</Tab>
            <Tab><Icon as={FaLightbulb} h={4} w={6} pr={"5px"}/> New</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Grid gap={5} gridTemplateColumns={"repeat(1,1fr)"}>
                {
                  feedback?.map((el)=>(
                    <GridItem>
                      <IndiFeedback 
                        key={el._id}
                        {...el}
                      />
                    </GridItem>
                  ))
                }
              </Grid> 
            </TabPanel>
            <TabPanel>
              <Form />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  )
}
