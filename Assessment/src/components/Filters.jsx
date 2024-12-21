import React from "react";

const Filters = ({ academicYear, classes, coursesList, onYearChange, onClassChange }) => {
  return (
    <div className="flex gap-4">
      {/* Academic Year Dropdown */}
      <select
        value={academicYear}
        onChange={onYearChange}
        className="pr-4 pl-5 border rounded-md bg-gray-300 cursor-pointer"
      >
        <option value="">AY 2024-25</option>
        <option value="2023">AY 2023-24</option>
        <option value="2024">AY 2024-25</option>
        <option value="2025">AY 2025-26</option>
      </select>

      {/* Classes Dropdown */}
      <select
        value={classes}
        onChange={onClassChange}
        className="p-2 pr-4 pl-2 border rounded-md bg-gray-300 cursor-pointer"
      >
        <option value="">CBSE 9</option>
        {coursesList.map((course) => (
          <option key={course.value} value={course.value}>
            {course.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
