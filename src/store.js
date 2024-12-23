import create from 'zustand';

const useStore = create((set) => ({
  students: [],
  courses: [],
  academicYears: [],
  setStudents: (students) => set({ students }),
  setCourses: (courses) => set({ courses }),
  setAcademicYears: (years) => set({ academicYears: years }),
}));

export default useStore;
