import { useState } from "react";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="container">
      {/* NAVBAR */}
      <nav className="navbar">
        <h2>WorkshopPro</h2>
        <div>
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("login")}>Login</button>
          <button onClick={() => setPage("register")}>Register</button>
          <button onClick={() => setPage("dashboard")}>Dashboard</button>
        </div>
      </nav>

      {/* PAGES */}
      {page === "home" && <Home />}
      {page === "login" && <Login />}
      {page === "register" && <Register />}
      {page === "dashboard" && <Dashboard />}
    </div>
  );
}

/* HOME PAGE */
function Home() {
  return (
    <section>
      <h1>Online Workshops & Training</h1>
      <p>Learn • Join • Grow</p>

      <div className="cards">
        <Workshop title="Web Development" date="25 April" />
        <Workshop title="AI & ML" date="30 April" />
        <Workshop title="Data Science" date="5 May" />
      </div>
    </section>
  );
}

/* WORKSHOP CARD */
function Workshop({ title, date }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>Date: {date}</p>
      <button>Register</button>
    </div>
  );
}

/* LOGIN PAGE */
function Login() {
  return (
    <section>
      <h2>Login</h2>
      <input placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
    </section>
  );
}

/* REGISTER PAGE */
function Register() {
  return (
    <section>
      <h2>Register</h2>
      <input placeholder="Name" />
      <input placeholder="Email" />
      <input placeholder="Phone" />
      <input type="password" placeholder="Password" />
      <button>Create Account</button>
    </section>
  );
}

/* DASHBOARD */
function Dashboard() {
  return (
    <section>
      <h2>User Dashboard</h2>
      <ul>
        <li>Web Development – Upcoming</li>
        <li>AI & ML – Upcoming</li>
        <li>Data Science – Completed</li>
      </ul>

      <button>Download Certificate</button>
      <button>View Resources</button>
    </section>
  );
}
