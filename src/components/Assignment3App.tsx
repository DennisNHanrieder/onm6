import { useState } from 'react'
import './App3.css'
import MyLi from './MyLi.js';

type Entry = {
  date: string;
  firstname: string;
  lastname: string;
};


function App() {
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [entryData, setEntryData] = useState<Entry[]>([]);

  function saveHandler() {
    const entry = {
      date: new Date().toLocaleString(),
      firstname: firstname,
      lastname: lastname
    }

    setEntryData([...entryData, entry])
    setFirstname("")
    setLastname("")
  }

  function deleteHandler(index: number) {
    const nextEntryData = entryData.slice();
    nextEntryData.splice(index, 1);
    setEntryData(nextEntryData);
  }
  
  function updateHandler(index: number, newFirstname: string, newLastname: string) {
    const nextEntryData = entryData.slice();
    nextEntryData[index].firstname = newFirstname;
    nextEntryData[index].lastname = newLastname;
    setEntryData(nextEntryData);
  }
  
  const listItems = entryData.map((entry, index: number) => (
    <MyLi
      key={index}
      date={entry.date}
      firstname={entry.firstname}
      lastname={entry.lastname}
      onDelete={() => deleteHandler(index)}
      onUpdate={(newFirstname: string, newLastname: string) =>
        updateHandler(index, newFirstname, newLastname)
      }
    />
  ));
  
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {listItems}
        </tbody>
      </table>

      <textarea
        placeholder="Firstname"
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
      />
      <br />
      <textarea
        placeholder="Lastname"
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
      />
      <br />
      <button onClick={saveHandler}>Save</button>
    </div>
  )
}

export default App
