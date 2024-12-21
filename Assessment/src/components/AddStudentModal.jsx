import React from "react";

const AddStudentModal = ({
  isModalOpen,
  newStudent,
  coursesList,
  onClose,
  onAdd,
  onInputChange,
  onCourseSelection,
}) => {
  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-1/3">
        <h2 className="text-xl font-semibold mb-4">Add New Student</h2>
        <form>
          {/* Name Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={newStudent.name}
              onChange={onInputChange}
              className="p-2 border rounded-md w-full"
              placeholder="Student Name"
            />
          </div>

          {/* Cohort Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Cohort</label>
            <input
              type="text"
              name="cohort"
              value={newStudent.cohort}
              onChange={onInputChange}
              className="p-2 border rounded-md w-full"
              placeholder="Cohort (e.g., AY 2024-25)"
            />
          </div>

          {/* Courses Selection */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Courses</label>
            {coursesList.map((course) => (
              <div key={course.value} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={newStudent.courses.includes(course.value)}
                  onChange={() => onCourseSelection(course.value)}
                />
                <span>{course.label}</span>
              </div>
            ))}
          </div>

          {/* Date Joined Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Date Joined</label>
            <input
              type="text"
              name="date_joined"
              value={newStudent.date_joined}
              onChange={onInputChange}
              className="p-2 border rounded-md w-full"
            />
          </div>

          {/* Last Login Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Last Login</label>
            <input
              type="text"
              name="last_login"
              value={newStudent.last_login}
              onChange={onInputChange}
              className="p-2 border rounded-md w-full"
            />
          </div>

          {/* Status Dropdown */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Status</label>
            <select
              name="status"
              value={newStudent.status}
              onChange={onInputChange}
              className="p-2 border rounded-md w-full"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          {/* Modal Action Buttons */}
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-500 text-white rounded-md"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={onAdd}
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Add Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudentModal;
