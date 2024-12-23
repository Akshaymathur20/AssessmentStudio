import React from "react";
import ScienceIcon from "../assets/icons/Science.svg";
import MathIcon from "../assets/icons/Math.svg";

const StudentRow = ({ student, isFirstRow }) => {
  const getIconForCourse = (course) => {
    if (course.includes("Science")) {
      return <img src={ScienceIcon} alt="Science Icon" className="w-4 h-4 inline-block" />;
    }
    if (course.includes("Math")) {
      return <img src={MathIcon} alt="Math Icon" className="w-4 h-4 inline-block" />;
    }
    return null;
  };

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
        <td className="px-5 py-2 text-sm">{student.cohort}</td>
        <td className="px-6 py-2 text-sm">
          <div className="flex items-center gap-2">
            {student.courses.map((course, index) => (
              <span key={index} className="flex items-center gap-1">
                {getIconForCourse(course)}
                <span>{course}</span>
              </span>
            ))}
          </div>
        </td>
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
