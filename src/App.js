import React from "react";
import Activitate from "./activitate";

export default function App() {
  const stergeActivitate = (id) => {};
  return (
    <div>
      <Activitate
        id="1"
        ora="10:00"
        titlu="Întâlnire cu presa"
        loc="Sala G114"
        descriere="Nu este cazul"
        sterge={stergeActivitate}
      />
    </div>
  );
}
