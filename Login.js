import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="screen">
      <h2>Signin to your PopX account</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <div className="form-group">
        <label>Email Address</label>
        <input type="email" placeholder="Enter email address" />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input type="password" placeholder="Enter password" />
      </div>

      {/* After login → go to Profile (4th page) */}
      <Link to="/profile">
        <button className="primary-btn">Login</button>
      </Link>
    </div>
  );
}
