import React from "react";

function CategoryFilter( {categories, selectedCategory, onHandleFilterButton}) {


  const categoriesElements = categories.map((category) => {
    return (
      <button key={category} className={category===selectedCategory ? "selected" : ""} 
      onClick={() => onHandleFilterButton(category)}>
        {category}
      </button>
    )
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoriesElements}
    </div>
  );
}

export default CategoryFilter;
