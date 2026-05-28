const todos=[
    {
       title:"workout at 5AM"
    },
    {
        title:"read books"
    },
    {
        title:"see TV"
    },

    {
        title:"Box Cricket"
    },
]


const  Todos=()=>{
    return <>
        {
            todos.map((todo)=><div><p>{todo.title}</p></div>

            )
        }
    </>
}

export default Todos;