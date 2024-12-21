import React from "react";

const StudentRow = ({ student }) => {
  return (
    <tr>
      <td className="px-4 py-2">{student.name}</td>
      <td className="px-4 py-2">{student.cohort}</td>
      <td className="px-4 py-2">{student.courses.join(", ")}</td>
      <td className="px-4 py-2">{student.date_joined}</td>
      <td className="px-4 py-2">{student.last_login}</td>
      <td className="px-4 py-2">
        <span
          className={`inline-block w-3 h-3 rounded-full ${
            student.status === "active" ? "bg-green-500" : "bg-red-500"
          }`}
        ></span>
      </td>
    </tr>
  );
};

export default StudentRow;
