import { Link } from "react-router-dom";

function ChallengeDayPage() {
  return (
    <main>
      <p>Day 12 of 60</p>
      <h1>Build a habit tracker</h1>

      <p>
        Create a mobile-friendly habit tracker where users can add habits,
        mark them complete, and see their progress.
      </p>

      <h2>Submit your proof</h2>

      <form>
        <label>
          GitHub commit URL
          <input type="url" placeholder="https://github.com/..." />
        </label>

        <br />

        <label>
          LinkedIn post URL
          <input type="url" placeholder="https://www.linkedin.com/..." />
        </label>

        <br />

        <label>
          Live deployment URL
          <input type="url" placeholder="https://..." />
        </label>

        <br />

        <button type="submit">Submit proof of work</button>
      </form>

      <br />
      <Link to="/dashboard">Back to dashboard</Link>
    </main>
  );
}

export default ChallengeDayPage;