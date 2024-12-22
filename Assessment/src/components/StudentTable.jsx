import React from "react";
import StudentRow from "./StudentRow";

const StudentTable = ({ students }) => {
  return (
    <table className="min-w-full">
      <thead>
        <tr>
          <th className="px-4 py-2 text-left">Student Name</th>
          <th className="px-4 py-2 text-left">Cohort</th>
          <th className="px-6 py-2 text-left">Courses</th>
          <th className="px-5 py-2 text-left">Date Joined</th>
          <th className="px-5 py-2 text-left">Last Login</th>
          <th className="px-4 py-2 text-left ">Status</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <StudentRow key={student.id} student={student} />
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
