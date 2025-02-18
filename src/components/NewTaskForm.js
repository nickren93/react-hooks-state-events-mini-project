import React, {useState} from "react";

function NewTaskForm( {/*form, setForm,*/ categories, onTaskFormSubmit}) {
  const [form, setForm] = useState({text: "", category: "Code"})

  const withoutAll = categories.filter(category => {
    return category !== "All"
  })
  const categoriesElements = withoutAll.map((category, index) => {
    return (
      <option key={index} value={category}>
        {category}
      </option>
    )
  })
  
  function handleItem(event){
    const name = event.target.name;
    const value = event.target.value;

    const newForm = {
      ...form,
      [name]: value,
    };
    setForm(newForm)
  }

  
  function handleSubmit(event){
    event.preventDefault();
    onTaskFormSubmit(form)
  }
  

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={form.text} onChange={handleItem}/>
      </label>
      <label>
        Category
        <select name="category" value={form.category} onChange={handleItem}>
          {/* render <option> elements for each category here */}
          {categoriesElements}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
