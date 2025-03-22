import React from "react";

const Main = () => {
  const [ingredients, setNewIngredient] = React.useState([]);

  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient} className="p-4 border-b border-gray-300">
      {ingredient}
    </li>
  ));

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const formData = new FormData(event.target);
  //   const newIngredient = formData.get("ingredient");
  //   setNewIngredient((prevIngredients) => [...prevIngredients, newIngredient]);
  //   console.log(newIngredient);
  // }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setNewIngredient((prevIngredients) => [...prevIngredients, newIngredient]);
    console.log(newIngredient);
  }

  return (
    <div className="flex w-full h-full flex-col space-y-4 p-4 bg-[#F8F8F7]">
      <form
        action={addIngredient}
        // onSubmit={handleSubmit}
        className="justify-center items-center gap-4 flex"
      >
        <input
          className="w-md border-2 border-gray-300 px-4 py-2 rounded-lg"
          type="text"
          placeholder="e.g. 1 cup of flour"
          aria-label="Add ingredient"
          name="ingredient"
          id="ingredient"
        />
        <button className="border-2 border-gray-300 px-4 py-2 rounded-lg bg-black text-white">
          + Add ingredient
        </button>
      </form>
      <ul>{ingredientsListItems}</ul>
    </div>
  );
};

export default Main;
