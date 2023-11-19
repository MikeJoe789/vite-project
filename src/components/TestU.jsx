export default function TestU(){
    const ar = [
        {
            name:'le',
            age:12
        },
        {
            name:'wang',
            age:13
        },
        {
            name:'liu',
            age:14
        },
    ]
    const showList = (ar)=>(
        ar.map((item,index)=>(
        <li key={index}>{item.name} + {item.age}</li>
        )
        )
        );
    console.log(showList(ar))
    return(
        <>
        <p>asdf</p>
        <ul>
            {showList(ar)}
        </ul>
        </>
    )

}