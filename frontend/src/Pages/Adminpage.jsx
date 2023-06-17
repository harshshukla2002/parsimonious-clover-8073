import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useWidth } from "../CustomHooks/useWidth";
import { BsFillPersonFill } from "react-icons/bs";
import { MdFeedback } from "react-icons/md";
import "../CSS/Stats.css";
import Users from "../Components/users";
import AdminFeedback from "../Components/AdminFeedback";

const Adminpage = () => {
  const width = useWidth();
  const [active, setActive] = useState("user");
  const [loading, setLoading] = useState(false);
  const ref = useRef();

  useEffect(() => {
    setLoading(true);
    ref.current = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => {
      clearTimeout(ref.current);
    };
  }, [active]);

  return (
    <div>
      <Flex
        alignItems={"center"}
        justifyContent={"space-around"}
        w={width < 1000 ? "95%" : "70%"}
        m="auto"
        mt="20px"
        textAlign={"center"}
        gap="10px"
        flexWrap={"wrap"}
      >
        <Heading
          size={"md"}
          fontWeight={"300"}
          className={active === "user" ? "stats-nav active" : "stats-nav"}
          onClick={() => setActive("user")}
        >
          <Flex alignItems={"center"} gap="5px">
            <BsFillPersonFill />
            User
          </Flex>
        </Heading>
        <Heading
          size={"md"}
          fontWeight={"300"}
          className={active === "feedback" ? "stats-nav active" : "stats-nav"}
          onClick={() => setActive("feedback")}
        >
          <Flex alignItems={"center"} gap="5px">
            <MdFeedback
              size={"20px"}
              color={active === "feedback" ? "black" : "gray"}
            />
            Feedback
          </Flex>
        </Heading>
      </Flex>
      <Box w={width < 1000 ? "95%" : "70%"} m="auto">
        {active === "user" ? (
          <>
            {loading ? (
              <div className="loader">
                {/* loading animation */}
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
                <div className="bar4"></div>
                <div className="bar5"></div>
                <div className="bar6"></div>
                <div className="bar7"></div>
                <div className="bar8"></div>
                <div className="bar9"></div>
                <div className="bar10"></div>
                <div className="bar11"></div>
                <div className="bar12"></div>
              </div>
            ) : (
              <Users />
            )}
          </>
        ) : (
          <>
            {loading ? (
              <div className="loader">
                {/* loading animation */}
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
                <div className="bar4"></div>
                <div className="bar5"></div>
                <div className="bar6"></div>
                <div className="bar7"></div>
                <div className="bar8"></div>
                <div className="bar9"></div>
                <div className="bar10"></div>
                <div className="bar11"></div>
                <div className="bar12"></div>
              </div>
            ) : (
              <AdminFeedback />
            )}
          </>
        )}
      </Box>
    </div>
  );
};

export default Adminpage;
