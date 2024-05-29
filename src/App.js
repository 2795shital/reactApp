
import './App.css';
import { EmpData } from './EmpData';
import React, { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState([]);
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [age, setage] = useState(0);
  const [id, setId] = useState(0);
  const [isUpdate, setUpdate] = useState(false);

  useEffect(() => {
    setData(EmpData)

  }, [])

  const handleEdit = (id) => {
    const dt = data.filter(item => item.id === id);
    if (dt !== undefined) {
      setUpdate(true)
      setFirstname(dt[0].firstName);
      setLastname(dt[0].LastName);
      setage(dt[0].age);
      setId(dt[0].id);
    }

  }

  const handleDelete = (id) => {
    if (id > 0) {
      if (window.confirm("Are you sure to  delete this item?")) {
        const dt = data.filter(item => item.id !== id);
        setData(dt)
      }
    }
  }

  const handleSave = () => {

  }

  const handleUpdate = () => {
    const index = data.map((item) =>{
      return item.id
    }).indexOf(id)
    
    const dt = [...data];
    dt[index].firstName = firstName;
    dt[index].lastName = lastName;
    dt[index].age = age;

    setData(dt)
    handleClear();
  }

  const handleClear = (id) => {
    setFirstname(0);
    setLastname('');
    setage(0);
    setId('');
    setUpdate(false)
  }

  return (
    <div className="App">

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: "10px", marginBottom: "10px" }}>
        <div>
          <lavel>First Name:</lavel>
          <input type='text' placeholder='Enter First Name' value={firstName} onChange={(e) => setFirstname(e.target.value)}></input>
        </div>

        <div>
          <lavel>Last Name:</lavel>
          <input type='text' placeholder='Enter Last Name' value={lastName} onChange={(e) => setLastname(e.target.value)}></input>
        </div>

        <div>
          <lavel>Age:</lavel>
          <input type='text' placeholder='Enter Age' value={age} onChange={(e) => setage(e.target.value)}></input>
        </div>

        <div>
          {
            !isUpdate ?
              <button className='btn btn-primary' onClick={() => handleSave()}>Save</button>
              :
              <button className='btn btn-primary' onClick={() => handleUpdate()}>Update</button>
          }
          <button className='btn btn-danger' onClick={() => handleClear(item.id)}>Clear</button>&nbsp;
        </div>

      </div>
      <table className='table table-hover'>
        <thead>
          <tr>
            <td>Sr.No</td>
            <td>ID</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Age</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.id}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.age}</td>
                  <td>
                    <button className='btn btn-primary' onClick={() => handleEdit(item.id)}>Edit</button>&nbsp;
                    <button className='btn btn-danger' onClick={() => handleDelete(item.id)}>Delete</button>&nbsp;
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

    </div>
  );
}

export default App;
