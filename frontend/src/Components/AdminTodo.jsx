import { Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { useWidth } from "../CustomHooks/useWidth";

const AdminTodo = () => {
  const [todos, setTodos] = useState([]);
  const { id } = useParams();
  const token = JSON.parse(localStorage.getItem("token")) || "";
  const width = useWidth();

  const fetchTodos = async () => {
    const GetCofig = {
      headers: { authorization: `bearer ${token}` },
      params: {
        userId: id,
      },
    };
    try {
      const response = await axios.get(
        "http://localhost:4500/todos/",
        GetCofig
      );
      setTodos(response.data.todos);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div style={{ width: "80%", margin: "auto", marginTop: "20px" }}>
      <Heading textAlign={"center"} m="30px">
        User ID : {id}
      </Heading>
      <TableContainer m="10px">
        <Table
          variant="striped"
          colorScheme="orange"
          w={width < 900 ? "90%" : "70%"}
          m={"auto"}
        >
          <TableCaption>USERS TODO</TableCaption>
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Description</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {todos.map((todo) => {
              return (
                <Tr key={todo._id}>
                  <Td>{todo.title}</Td>
                  <Td>{todo.description}</Td>
                  <Td>{todo.status ? "Completed" : "Not Completed"}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AdminTodo;
