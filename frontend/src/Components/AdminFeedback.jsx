import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const AdminFeedback = () => {
  const token = JSON.parse(localStorage.getItem("token")) || "";
  const [feedback, setFeedback] = useState([]);

  const GetFeedback = async () => {
    const headers = { authorization: `bearer ${token}` };
    try {
      const res = await axios.get("http://localhost:4500/feedback/", headers);
      setFeedback(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    GetFeedback();
  }, []);

  return (
    <div style={{ margin: "10px" }}>
      <SimpleGrid columns={[1, 2]} gap="20px">
        {feedback.map((item) => {
          return (
            <Box
              key={item._id}
              margin={"10px"}
              border={"1px solid gray"}
              borderRadius={"2px"}
              p="10px"
            >
              <Heading size={'lg'}>{item.name}</Heading>
              <Box m="0px 10px">
                <Text m="5px">Title: {item.title}</Text>
                <Text m="5px">Description: {item.body}</Text>
                <Text m="5px">Likes: {item.liked}</Text>
              </Box>
            </Box>
          );
        })}
      </SimpleGrid>
    </div>
  );
};

export default AdminFeedback;
