import React, { useState, useEffect } from 'react'

import api from '../../services/api';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let users = loadUsers();

    console.log('users', users);
  }, []);

  let loadUsers = async () => {
    const response = await api.get('/user', //proxy uri
      {
        headers: {
          "Access-Control-Allow-Origin": "true",
          "Access-Control-Allow-Headers": "Authorization",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
          "Content-Type": "application/json;charset=UTF-8"
        },
      });
    setUsers(response.data)

  }
  return (
    <div className="book-list">
      <h1>Lista de Pessoas</h1>
      <table className="book-table" >
        <thead>
          <tr>
            <th>Age</th>
            <th>Name</th>
            <th>Emails</th>
            <th>Telephones</th>
            <th>Addresses</th>
          </tr>
        </thead>
        {users.map(book => (
          <tbody key={book._id}>
            <tr>
              <th>{book.age}</th>
              <th>{book.name}</th>
              <th>{book.emails}</th>
              <th>{book.telephones}</th>
              <th>{book.addresses}</th>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  )
}
