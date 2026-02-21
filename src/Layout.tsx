import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <nav style={{ display: 'flex', gap: '15px', padding: '10px', borderBottom: '1px solid' }}>
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/about">About</Link>
      </nav>
      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>
      <footer>Student Portal 2026</footer>
    </div>
  );
}