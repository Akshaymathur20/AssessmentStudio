import React from "react";

const StudentRow = ({ student, isFirstRow }) => {
  return (
    <>
      {!isFirstRow && (
        <tr>
          <td colSpan="6">
            <hr className="border-gray-300 my-0" />
          </td>
        </tr>
      )}
      <tr>
        <td className="px-4 py-2 text-sm">{student.name}</td>
        <td className="px-4 py-2 text-sm">{student.cohort}</td>
        <td className="px-6 py-2 text-sm">{student.courses.join(", ")}</td>
        <td className="px-5 py-2 text-sm">{student.date_joined}</td>
        <td className="px-5 py-2 text-sm">{student.last_login}</td>
        <td className="px-8 py-2 text-sm">
          <span
            className={`inline-block w-2.5 h-2.5 rounded-full ${
              student.status === "active" ? "bg-green-500" : "bg-red-500"
            }`}
          ></span>
        </td>
      </tr>
    </>
  );
};

export default StudentRow;
