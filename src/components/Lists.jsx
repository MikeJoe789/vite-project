function Lists({listData}){

    const userList = (listDatas)=>(
        listDatas.map((item, index)=>(
            <li key={index}>
                GivenName:{item.givenName}
                FirstName:{item.firstName}
                Birthday:{item.birthday}
                Time:{item.time}
            </li>
        ))

    );
    if(listData.length>0){
        return(
            <>
            <div className="userList">
                <h2>USERS LIST</h2>
                <ul>
                    {userList(listData)}
                </ul>

            </div>
            </>
    
        )      
    } else {
        return(
            <>
            <div className="userList">
                <h2>No Users</h2>    
            </div>
            </>
    
        )    
    }

}

export default Lists;