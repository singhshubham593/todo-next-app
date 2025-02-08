import React from "react";

const Todo = (id,title,description,mongoId,complete,deleteTodo,completeTodo) => {
  return (
    <>
      <tr className="bg-white border-b  border-gray-200">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
        >
          {id + 1}
        </th>
        <td className="px-6 py-4 ">
          {title}
        </td>
        <td className="px-6 py-4">
          {description}
        </td>
        <td className="px-6 py-4">
          {complete? "Completed" : "pending"}
        </td>
        <td className="px-6 py-4 flex gap-2">
            <button onClick={()=>deleteTodo} className="py-2 px-4 bg-red-500 text-white">
                Delete
            </button>
            <button onClick={()=>completeTodo(mongoId)} className="py-2 px-4 bg-green-500 text-white">
                Complete
            </button>
        </td>
         
      </tr>
    </>
  );
};

export default Todo;
