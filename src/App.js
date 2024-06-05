import { useState } from 'react';
import './App.css';
import Todo from './Todo';

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [addItems, setAddItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const createTitle = (e) => {
    setTitle(e.target.value);
  };

  const createDescription = (e) => {
    setDescription(e.target.value);
  };

  const addItem = () => {
    const newItem = { title, description };
    if (editIndex !== null) {
      const updatedItems = [...addItems];
      updatedItems[editIndex] = newItem;
      setAddItems(updatedItems);
      setTitle("");
      setDescription("");
      setEditIndex(null);
    } else {
      setAddItems([...addItems, newItem]);
      setTitle("");
      setDescription("");
    }
  };

  const editItem = (index) => {
    setTitle(addItems[index].title);
    setDescription(addItems[index].description);
    setEditIndex(index);
  };

  const deleteItem = (id) => {
    setAddItems((items) => {
      return items.filter((_, index) => index !== id);
    });
    setEditIndex(null);
  };

  return (
    <>
      <div className='outer-container' style={{ padding: "2rem", borderRadius: "20px" }}>
        <div className='inner-container' style={{ borderRadius: "20px", padding: "2rem" }}>
          <h1>TODO-LIST</h1>
          <div className='box-1'>
            <input 
              type="text" 
              placeholder='Add Title' 
              value={title} 
              onChange={createTitle} 
            />
            <input 
              type="text" 
              placeholder='Add Description' 
              value={description} 
              onChange={createDescription} 
            />
            <div className='box-2'>
              <button onClick={addItem}>{editIndex !== null ? 'Save' : '+'}</button>
            </div>
          </div>
          <div className='list' style={{ padding: "1rem" }}>
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {addItems.map((item, index) => (
                  <Todo 
                    key={index} 
                    data={item} 
                    id={index} 
                    onSelect={deleteItem} 
                    onEdit={editItem} 
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
