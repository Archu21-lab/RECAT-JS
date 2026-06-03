// const todos = [
//   {
//     title: "workout at 5AM",
//   },
//   {
//     title: "read books",
//   },
//   {
//     title: "see TV",
//   },

//   {
//     title: "Box Cricket",
//   },
// ];
import { useState } from "react";
const Todo = () => {
  const [todos, setTodos] = useState([{ title: "Singing At 5AM" }]);
  const [title, setTitle] = useState("");
  const [hide, setHide] = useState(true);

  return (
    <>
      <section>
        <div className="container">
          <div className="mt-4">
            <h2>DAILY NOTES</h2>
            <p className="fs-3 fw-bold">
              Structure Your Thoughts By Daily Notes..
            </p>
          </div>
          <div className="d-flex my-5">
            <input
              value={title}
              placeholder="Favourite Poet,song,Grocery,Bill etc."
              className="form-control"
              type="text"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
              //onChange sirf bas input tag use krte hai tab use krte
              // hai usme se value bahar nikalne k liye input
              // tag mese bahar nikalne k liye means print hone k liye
            />

            <button
              onClick={() => {
                setHide(true);
              }}
              className={`btn btn-warning ms-3 ${hide ? "d-none" : ""}`}
            >
              Update
            </button>
            <button
              onClick={() => {
                setTodos([...todos, { title }]);
              }}
              className={
                "btn btn-primary mx-3 " + (title === "" ? "disabled" : "")
              }
            >
              ADD
            </button>
          </div>

          <div className="container m-2">
            {todos.map((todo, i) => (
              <div key={i} className="container d-flex">
                <p className="container m-2 bg-info p-2 rounded">
                  {todo.title}
                </p>
                <button
                  onClick={() => {
                    const temp = [...todos];
                    temp.splice(i, 1);
                    setTodos(temp);
                  }}
                  className="btn btn-danger m-2"
                >
                  Remove
                </button>
                <button
                  onClick={() => {
                    setTitle(todos[i].title);
                    setHide(false);
                  }}
                  className="btn btn-warning m-2"
                >
                  Edit
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Todo;
