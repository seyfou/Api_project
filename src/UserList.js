import React from "react";
import { ListGroup } from 'react-bootstrap';

const UserList = ({ user }) => {
  return (
    <div className="userList">
        <ListGroup >
      {user.map((el) => (
        <div className=" list" key={el.id}>
          <ListGroup.Item> <span className="pp">ID:{el.id}</span> </ListGroup.Item>
          <ListGroup.Item>Name:{el.name} </ListGroup.Item>
          <ListGroup.Item>sername:  {el.username}</ListGroup.Item>
          <ListGroup.Item>Email: {el.email}</ListGroup.Item>
          <ListGroup.Item> Street : {el.address.street   }</ListGroup.Item>
          <ListGroup.Item> Suite: {el.address.suite }</ListGroup.Item>
          <ListGroup.Item>Phone: {el.phone}</ListGroup.Item>
          <ListGroup.Item>Websit:  {el.website}</ListGroup.Item>
          <ListGroup.Item>Company Name:  {el.company.name}</ListGroup.Item>
          <ListGroup.Item>Company bs:  {el.company.bs}</ListGroup.Item>

        </div>
      ))}
                </ListGroup>
    </div>
  );
};
export default UserList;