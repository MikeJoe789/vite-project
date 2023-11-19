import './App.scss'
import Forms from './components/Forms'
import Lists from './components/Lists';
import React, { useState } from 'react';

function App() {
  const[userList, setUserList] = useState([]);
  const handleSubmit = function onSubmit(newData){
    setUserList([
      ...userList,
      newData
    ])
  }
  // console.log(userList);
  return (
    <>
    <Forms onSubmit={handleSubmit} />
    <Lists listData={userList} />
    </>
  )
}

export default App
