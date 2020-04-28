import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

    const [count, setCount] = useState(0);
    const [data, refreshData] = useState([{
        name: 'Ivan',
        sex: 'male'
    }]);

    useEffect(() => {
        if (data) {
            console.log(data);
        }
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => {
                setCount(count + 1)
            }}>Click me
            </button>
            {data.map(item => {
                return (
                    <div>Name: {item.name}, sex: {item.sex}</div>
                );
            })}
            <button onClick={() => refreshData(data => ([...data, {name: 'Alex', sex: 'male'}]))}>Add data</button>
        </div>

    );
}

export default App;
