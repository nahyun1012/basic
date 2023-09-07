import { useState } from "react";

const FILTER_MAP = {
  All: () => true,
  Done: (todo) => todo.checked,
  Active: (todo) => !todo.checked
}

function FilterButton({ name, isPressed, setFilter }) {
  return (
    <button
      className={"text-white p-1 mx-2 w-24 font-semibold rounded-lg " + (isPressed ?  "bg-rose-100 text-gray-500" : "bg-rose-300")}
      onClick={() => setFilter(name)}
    >
      {name}
    </button>
  )
}

// Object

export default function App() {
  // todo 생성
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");

  console.log(todos)
  console.log(filter)

  // setTodo에 todo값 복사
  const addTodo = ((text) => {
    const newTask = { id: "todo-" + Date.now(), name: text, checked: false }
    setTodos([...todos, newTask]);
  });

  const [value, setValue] = useState("");

  // 추가
  const onSubmit = ((e) => {
    e.preventDefault();
    if (value === "") {
      return
    }
    addTodo(value);
    setValue("");
  })

  // 삭제
  const deleteTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }

  // 밑줄
  const checkedTodo = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo)
    )
  }

  // 완료항목 모음
  const filterButtons = ["All", "Done", "Active"].map(name => (
    <FilterButton
      name={name}
      isPressed={filter === name}
      setFilter={setFilter}
    />
  ))


  return (
    <div className="bg-gray-100 min-h-screen m-0">
      <div className="bg-white w-96 mx-auto mt-10 rounded-2xl shadow-[0_0_8px_0_rgba(0,0,0,0.3)]">
        <h1 className="text-3xl font-bold text-center mt-3 py-5">Todo List</h1>
        <form
          onSubmit={onSubmit}
          className="text-center mb-5"
        >
          <input
            type="text"
            className="border border-gray-400 mr-5 px-2 rounded-lg "
            placeholder="할 일을 입력하세요"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="bg-rose-300 font-bold text-white rounded-full w-6 h-6">
            +
          </button>
        </form>
        <div className="text-center pb-3">
          {filterButtons}
        </div>
        <ul className="relative pb-5 px-5">
          {todos.filter(FILTER_MAP[filter]).map(item => (
            <>
              <li key={item.id} className="flex py-2">
                <input
                  type="checkbox"
                  className="mr-2 peer"
                  onClick={() => checkedTodo(item.id)}
                />
                <p className={`peer-checked:line-through`}>
                  {item.name}
                </p>
                <div className="absolute right-0 mr-5">
                  <button
                    className="px-2 py-0.5"
                    onClick={() => deleteTodo(item.id)}
                  >
                    <svg
                      className="w-4 svg"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" /></svg>
                  </button>
                </div>
              </li>
            </>
          ))}

        </ul>
      </div>
    </div>
  )
}