const todos = [
  {
    title: "workout at 5AM",
  },
  {
    title: "read books",
  },
  {
    title: "see TV",
  },

  {
    title: "Box Cricket",
  },
];

const Todo = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="mt-4">
            <h2>DAILY NOTES</h2>
            <p className="fs-3 fw-bold">Structure Your Thoughts By Daily Notes..</p>
          </div>
          <div className="d-flex my-5">
            <input placeholder="Favourite Poet,song,Grocery,Bill etc." className="form-control"  type="text" />
            <button className="btn btn-primary mx-2">ADD</button>
          </div>

          {todos.map((todo) => (
            <div>
              <p className="container">{todo.title}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Todo;
