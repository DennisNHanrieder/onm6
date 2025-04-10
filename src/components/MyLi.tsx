import { useState, useRef, useEffect } from 'react';
import './MyLi.css';

type MyLiProps = {
  date: string;
  firstname: string;
  lastname: string;
  onDelete: () => void;
  onUpdate: (newFirstname: string, newLastname: string) => void;
};

export default function MyLi({ date, firstname, lastname, onDelete, onUpdate }: MyLiProps) {
  const [editing, setEditing] = useState(false);
  const [myFirstname, setMyFirstname] = useState(firstname);
  const [myLastname, setMyLastname] = useState(lastname);

  const myInput = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (editing && myInput.current) {
      myInput.current.select();
    }
  }, [editing]);

  function editHandler() {
    setEditing(true);
  }

  function updateHandler() {
    setEditing(false);
    onUpdate(myFirstname, myLastname);
  }

  return (
    <tr className={editing ? 'editing' : ''}>
      <td><em>{date}</em></td>

      {editing ? (
        <>
          <td>
            <input
              className="edit"
              ref={myInput}
              value={myFirstname}
              onChange={(e) => setMyFirstname(e.target.value)}
            />
          </td>
          <td>
            <input
              className="edit"
              value={myLastname}
              onChange={(e) => setMyLastname(e.target.value)}
            />
          </td>
          <td>
            <button onClick={updateHandler}>✔</button>
          </td>
        </>
      ) : (
        <>
          <td>{firstname}</td>
          <td>{lastname}</td>
          <td>
            <button onClick={editHandler}>Edit</button>
            <button onClick={onDelete}>Delete</button>
          </td>
        </>
      )}
    </tr>
  );
}
