import { useState } from "react";

export default function Main() {
  const initialColumns = [
    {
      id: "1",
      name: "TO DO",
      notes: [],
    },
    {
      id: "2",
      name: "IN PROGRESS",
      notes: [],
    },
    {
      id: "3",
      name: "DONE",
      notes: [],
    },
  ];
  const [columns, setColumns] = useState(initialColumns);
  console.log(columns);

  const handleClick = () => {
    setColumns([...columns, { id: columns.length + 1, name: "Nueva columna" }]);
  };

  const handleAddNote = (e) => {
    e.preventDefault();
    console.log("Añadir nota");
  };
  return (
    <main className="main">
      <section className="dashboard">
        <button onClick={handleClick}>+</button>
        <div className="columns">
          {columns.map((column) => (
            <div className="column">
              <p>
                {column.id} - {column.name}
              </p>
              {column.id === "1" && (
                <form onSubmit={handleAddNote}>
                  <input type="text" placeholder="Nueva tarea" />
                  <button type="submit">Añadir</button>
                </form>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
