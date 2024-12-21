import React, { useState, useEffect } from "react";
import { supabase } from "../supaabase/createClient";
import AddStudentModal from "../components/AddStudentModal";
import Filters from "../components/Filters";
import StudentTable from "../components/StudentTable";

const MainSection = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [academicYear, setAcademicYear] = useState("");
  const [classes, setClasses] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newStudent, setNewStudent] = useState({
    name: "",
    cohort: "",
    courses: [],
    date_joined: "",
    last_login: "",
    status: "inactive",
  });

  const coursesList = [
    { label: "CBSE 9 Math", value: "CBSE 9 Math" },
    { label: "CBSE 9 Science", value: "CBSE 9 Science" },
  ];

  useEffect(() => {
    const fetchStudents = async () => {
      const { data, error } = await supabase.from("students").select("*");
      if (error) console.error("Error fetching students:", error);
      else setStudents(data);
    };
    fetchStudents();
  }, []);

  useEffect(() => {
    let filtered = students;
    if (academicYear) {
      filtered = filtered.filter((student) => student.cohort === academicYear);
    }
    if (classes) {
      filtered = filtered.filter((student) => student.courses.includes(classes));
    }
    setFilteredStudents(filtered);
  }, [academicYear, classes, students]);

  const handleAddStudent = async () => {
    const { data, error } = await supabase.from("students").insert([newStudent]);
    if (error) {
      console.error("Error adding student:", error);
    } else {
      setIsModalOpen(false);
      setStudents((prev) => [...prev, data[0]]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handleCourseSelection = (course) => {
    setNewStudent((prev) => ({
      ...prev,
      courses: prev.courses.includes(course)
        ? prev.courses.filter((c) => c !== course)
        : [...prev.courses, course],
    }));
  };

  return (
    <div className="bg-white">
      <div className="flex justify-between items-center mb-4">
        <Filters
          academicYear={academicYear}
          classes={classes}
          coursesList={coursesList}
          onYearChange={(e) => setAcademicYear(e.target.value)}
          onClassChange={(e) => setClasses(e.target.value)}
        />
        <button
          onClick={() => setIsModalOpen(true)}
          className="border rounded-md bg-gray-300 px-4 py-2 cursor-pointer"
        >
          + Add Student
        </button>
      </div>
      <StudentTable students={filteredStudents} />
      <AddStudentModal
        isModalOpen={isModalOpen}
        newStudent={newStudent}
        coursesList={coursesList}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddStudent}
        onInputChange={handleInputChange}
        onCourseSelection={handleCourseSelection}
      />
    </div>
  );
};

export default MainSection;
