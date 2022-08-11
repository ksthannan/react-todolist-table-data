import { useEffect, useState } from 'react';
const axios = require('axios').default;


function TodoList(props){
    
    const [count, setCount] = useState(0);

    const [data, setData] = useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(function (response) {
            setData(response.data)
            setCount(response.data.length)
        })
        .catch(function (error) {
          console.log(error);
        })

        
    }, [])

    const totoEdit = (id)=>{
        console.log("Edit: "+id)
    }

    const todoDelete = (id)=>{
        console.log("Delete: "+id)
    }

    const todoComplete = (id)=>{
        console.log("Complete: "+id)
    }

    const list = data.map((value, index)=>{
        return(
            <tr key={index}>
                <td>{index+1}</td>
                <td>{value['userId']}</td>
                <td>{value['id']}</td>
                <td>{value['title']}</td>
                <td>{value['completed']===true?"Completed":"Pending"}</td>
                <td><button onClick={totoEdit.bind(this, value['id'])}>Edit</button><button onClick={todoDelete.bind(this, value['id'])}>Delete</button><button onClick={todoComplete.bind(this, value['id'])}>Mark as {value['completed']===false?"completed":"pending"}</button></td>
            </tr>
        )
    })

    return(
        <div className='app_wrap'>
            <h1>Todo list of {count} {props.area}</h1>
            <div className='data'>
               <table>
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>User ID</th>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list}
                    </tbody>
               </table>
            </div>
        </div>
    )
}
export default TodoList