import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
const FilterTask = () => {
  const { setFilter, filter } = useContext(TaskContext);
  const handleChange = (e) => {
    setFilter(e.target.value);
    console.log(filter);
  };
  return (
    <div className="mt-2 mb-4">
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        className="rounded-md outline-dashed outline-violet-500 border-none py-2 px-3"
        placeholder="Filter tasks"
      />
    </div>
  );
};

export default FilterTask;
