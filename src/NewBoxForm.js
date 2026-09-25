import { useState } from "react";

function NewBoxForm({ addBox }) {
  const [formData, setFormData] = useState({
    width: "",
    height: "",
    backgroundColor: ""
  });

  function handleChange(evt) {
    const { name, value } = evt.target;

    setFormData(data => ({
      ...data,
      [name]: value
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    addBox({
      ...formData,
      id: Date.now()
    });

    setFormData({
      width: "",
      height: "",
      backgroundColor: ""
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="width">Width:</label>
      <input
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />

      <label htmlFor="height">Height:</label>
      <input
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />

      <label htmlFor="backgroundColor">Color:</label>
      <input
        id="backgroundColor"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
      />

      <button>Add Box</button>
    </form>
  );
}

export default NewBoxForm;