import { useState } from 'react';


function TestU(){
    const [userData, setUserData] = useState(null)
    // const [userList, setUserList] = useState(null)
    const fetchData = ()=>{
        fetch('./data.json')
        .then(response=> response.json())
        .then(data=>setUserData(data))
        .catch(error=>console.error('Error fetching data:', error));
    }
    fetchData();
    if(userData){
        let {users} = userData;

        const userList =users.map((item)=>(
            <li key={item.id}>{item.name}</li>
        ))
        return(
            <>
            <p>useCallback</p> 
            <ul>
                {userList}
            </ul>
            </>
        )
    } else {
        return (
            <p>nothing in list</p> 

        )
    }




}

export default TestU;
