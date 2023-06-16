import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineLine } from "react-icons/ai";
import { BsFillCalendarFill } from "react-icons/bs";
import BarChart from "./Barchart";
import { BsCheckCircleFill, BsFillLightbulbFill } from "react-icons/bs";
import "../CSS/PersonalStats.css";
import { FaClock } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import { ImCross } from "react-icons/im";

const PersonalStats = () => {
  const date = new Date();
  const [value, setValue] = useState("time");

  return (
    <div>
      <Flex
        mt="10px"
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        gap="10px"
      >
        <Flex alignItems={"center"} gap="5px">
          <Text color={"gray"} fontSize={"16px"}>
            Categories
          </Text>
          <Flex
            border={"1px solid teal"}
            p="3px 10px"
            alignItems={"center"}
            borderRadius={"2px"}
            color={"teal"}
            m="auto"
          >
            <AiOutlineLine />
            1m
          </Flex>
        </Flex>
        <Flex
          alignItems={"center"}
          gap="10px"
          fontSize={"17px"}
          border={"1px solid gray"}
          p="5px 15px"
        >
          <BsFillCalendarFill />
          {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
        </Flex>
      </Flex>
      <Flex
        mt="10px"
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        gap="10px"
      >
        <Box>
          <Heading fontWeight={"500"} size={"md"}>
            Activity by days
          </Heading>
        </Box>
        <Flex>
          <Box
            className={
              value === "time" ? "date-box date-box-active" : "date-box"
            }
            onClick={() => setValue("time")}
          >
            TIME
          </Box>
          <Box
            className={
              value === "number" ? "date-box date-box-active" : "date-box"
            }
            onClick={() => setValue("number")}
          >
            NUMBER
          </Box>
        </Flex>
      </Flex>
      <BarChart value={value} />
      <Flex alignItems={"center"} gap="10px" flexWrap={"wrap"}>
        <Box bg="#ef233c" className="stats-card">
          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            fontSize={"25px"}
          >
            <BsCheckCircleFill />1
          </Flex>
          <Text textAlign={"right"}>Pomodoros</Text>
        </Box>
        <Box bg="#ffb703" className="stats-card">
          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            fontSize={"25px"}
          >
            <FaClock />
            1m
          </Flex>
          <Text textAlign={"right"}>Time Spent</Text>
        </Box>
        <Box bg="#a7c957" className="stats-card">
          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            fontSize={"25px"}
          >
            <AiOutlineBars />
            1/1m
          </Flex>
          <Text textAlign={"right"}>Median Per Day</Text>
        </Box>
        <Box bg="purple" className="stats-card">
          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            fontSize={"25px"}
          >
            <BsFillLightbulbFill />
            100%
          </Flex>
          <Text textAlign={"right"}>Focus</Text>
        </Box>
        <Box bg="red" className="stats-card">
          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            fontSize={"25px"}
          >
            <ImCross />
            /0
          </Flex>
          <Text fontSize={"17px"} textAlign={"right"}>
            Delays/Interruptions
          </Text>
        </Box>
      </Flex>
    </div>
  );
};

export default PersonalStats;
