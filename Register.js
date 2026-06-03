import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="screen">
      <h2>Create your PopX account</h2>
      <input type="text" placeholder="Full Name*" />
      <input type="text" placeholder="Phone number*" />
      <input type="email" placeholder="Email address*" />
      <input type="password" placeholder="Password*" />
      <input type="text" placeholder="Company name" />
      <div className="radio-group">
        <label>Are you an Agency?*</label>
        <div>
          <input type="radio" name="agency" /> Yes
          <input type="radio" name="agency" /> No
        </div>
      </div>

      {/* After register → go to Profile (4th page) */}
      <Link to="/profile">
        <button className="primary-btn">Create Account</button>
      </Link>
    </div>
  );
}
