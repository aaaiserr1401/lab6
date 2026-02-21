export interface Course {
  id: number;
  title: string;
  instructor: string;
  description: string;
}

export const courses: Course[] = [
  { id: 1, title: "React Router", instructor: "Sakhniuk", description: "Basics of navigation." },
  { id: 2, title: "TypeScript", instructor: "Boduch", description: "Deep dive into types." },
  { id: 3, title: "Vite Guide", instructor: "Evan You", description: "Fast build tools." },
  { id: 4, title: "State Management", instructor: "Dan Abramov", description: "Handling data." },
];

export const getCourseById = (id: number) => courses.find(c => c.id === id);
