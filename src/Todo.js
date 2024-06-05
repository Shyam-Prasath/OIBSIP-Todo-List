import React from 'react';
import './App.css';

const Todo = (props) => {
  return (
    <tr>
      <td>{props.data.title}</td>
      <td>{props.data.description}</td>
      <td>
        <button onClick={() => props.onEdit(props.id)} style={{ marginRight: "10px" }}>Edit</button>
        <button onClick={() => props.onSelect(props.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default Todo;
