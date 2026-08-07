import { Link } from "react-router-dom";

function DashboardPage() {
  return (
    <main>
      <p>ABTalks student dashboard</p>
      <h1>Welcome back, Aarav.</h1>
      <p>Day 12 of 60</p>
      <p>Current streak: 5 days</p>

      <h2>Today's task</h2>
      <p>Build a habit tracker that helps users stay consistent.</p>

      <Link to="/day/12">Open Day 12</Link>
      <br />
      <Link to="/">Back to home</Link>
    </main>
  );
}

export default DashboardPage;