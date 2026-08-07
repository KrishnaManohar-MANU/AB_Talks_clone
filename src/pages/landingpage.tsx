import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <main>
      <p>ABTalks</p>
      <h1>Build something every day for 60 days.</h1>
      <p>
        A focused coding challenge for students who want to build consistency,
        create proof of work, and become visible to recruiters.
      </p>

      <Link to="/dashboard">View student dashboard</Link>
    </main>
  );
}

export default LandingPage;