import { useState } from 'react'
import Todo from './components/Todo'
import './App.css'
import TodoForm from './components/TodoForm'

function App() {
  const [toDos, setToDos] = useState([{
    id: 1,
    text: "Criar funcionalidade x no sistema",
    category: "Trabalho",
    isCompleted: false,
  },
  {
    id: 2,
    text: "Ir pra academia",
    category: "Pessoal",
    isCompleted: false,
  },
  {
    id: 3,
    text: "Estudar React",
    category: "Estudos",
    isCompleted: false,
  }])

  const addTodo = (text, category) => {

    const newTodos = [...toDos, {
      id: Math.floor(Math.random() * 1000),
      text,
      category,
      isCompleted: false,
    },
    ];
    setToDos(newTodos)
  }

  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <div className='todo-list'>
        {toDos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  )
}

export default App
