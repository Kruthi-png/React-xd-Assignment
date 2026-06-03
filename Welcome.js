import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="screen">
      <h2>Welcome to PopX</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      {/* Goes to Register (3rd page) */}
      <Link to="/register">
        <button className="primary-btn">Create Account</button>
      </Link>

      {/* Goes to Login (2nd page) */}
      <Link to="/login">
        <button className="secondary-btn">Already Registered? Login</button>
      </Link>
    </div>
  );
}
