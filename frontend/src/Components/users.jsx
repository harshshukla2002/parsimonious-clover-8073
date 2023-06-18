import axios from "axios";
import React, { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";

const Users = () => {
  const token = JSON.parse(localStorage.getItem("token")) || "";
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const GetUser = async () => {
    const headers = { authorization: `Bearer ${token}` };
    try {
      const res = await axios.get("https://clear-gaiters-hen.cyclic.app/users/", headers);
      setUsers(res.data.users);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    GetUser();
  }, []);

  return (
    <div
      style={{
        margin: "20px",
        border: "1px solid gray",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      <TableContainer>
        <Table variant="striped" colorScheme="tomato">
          <TableCaption>USERS</TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Gender</Th>
              <Th>Age</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user) => {
              return (
                <Tr
                  cursor={"pointer"}
                  key={user._id}
                  onClick={() => navigate(`/users/${user._id}`)}
                >
                  <Td>{user.name}</Td>
                  <Td>{user.email}</Td>
                  <Td>{user.gender}</Td>
                  <Td>{user.age}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Users;
