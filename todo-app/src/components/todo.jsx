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
              placeholder="Favourite Poet,song,Grocery,Bill etc."
              className="form-control"
              type="text"
              onChange={(e) => {
                setTitle(e.target.value);
              }} //ye onChange sirf bas input tag use krte hai tab use krte
              // hai usme se value bahar nikalne k liye input
              // tag mese bahar nikalne k liye means print hone k liye
            />
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

          <div className="">
            {todos.map((todo, i) => (
              <div key={i} className="">
                <p className="container">{todo.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Todo;
