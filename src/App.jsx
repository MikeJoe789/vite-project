import './App.scss'
import Forms from './components/Forms'
import Lists from './components/Lists';
import React, { useState } from 'react';
import TestU from './components/TestU';


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
    {/* <Forms onSubmit={handleSubmit} />
    <Lists listData={userList} /> */}
    <TestU />
    </>
  )
}

export default App
