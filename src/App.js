import './App.css';
import {useState} from "react";
import Select from "./components/Select";

function App() {
  const [value, setValue] = useState('Выберите животное');
  const options = [
    {
      id: 1,
      title: 'Слон'
},
  {
    id: 2,
        title: 'Бегемот'
  },
  {
    id: 3,
        title: 'Зебра'
  },
  {
    id: 4,
        title: 'Жираф'
  },
  {
    id: 5,
        title: 'Лев'
  }
]

  return (
    <div className="App">
      <Select options={options} value={value} onChange={e => setValue(e)}/>
    </div>
  );
}

export default App;
