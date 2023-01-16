import './App.css';
import {useState} from "react";
import {useGetPhotosQuery} from "./redux/photosApi";

function App() {
  const [count, setCount] = useState('');
  const {data = [], isLoading} = useGetPhotosQuery(count);

  if(isLoading) return <h1>Loading...</h1>

  return (
    <div className="App">
      {
        data.map(item =>(
            <div>
            <img src={item.url} alt={item.title} key={item.id} className="img"/>
              <span>{item.title}</span>
        </div>
        ))
      }
    </div>
  );
}

export default App;
