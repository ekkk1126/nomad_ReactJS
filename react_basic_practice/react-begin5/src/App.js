import { useState } from 'react'
function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === '') {
      return;
    }
    setToDo('');
    setToDos(currentArray => [toDo, ...currentArray])
  }
  return (
    <div>
      <h2>My ToDo List ({toDos.length})</h2>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          type='text'
          placeholder='Write your to do ...' />
        <button>Add To Do</button>
      </form>
      <hr />
      {toDos.map((item, index) => <li key={index}>{item}</li>)}
    </div>
  );
}

export default App;