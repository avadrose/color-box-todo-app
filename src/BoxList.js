import { useState } from "react";
import Box from "./Box.js";
import NewBoxForm from "./NewBoxForm.js";

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  function addBox(box) {
    setBoxes(boxes => [...boxes, box]);
  }

  function removeBox(id) {
    setBoxes(boxes => boxes.filter(box => box.id !== id));
  }

  return (
    <div>
      <h1>Color Box Maker</h1>

      <NewBoxForm addBox={addBox} />

      {boxes.map(box => (
        <Box
          key={box.id}
          id={box.id}
          width={box.width}
          height={box.height}
          backgroundColor={box.backgroundColor}
          removeBox={removeBox}
        />
      ))}
    </div>
  );
}

export default BoxList;