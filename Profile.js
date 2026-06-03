export default function Profile() {
  return (
    <div className="screen profile">
      <div className="profile-header">
        {/* Full image fits naturally, no circle/rectangle crop */}
        <div className="avatar-wrapper">
          <img src="/assets/profile-pic.png" alt="Profile" className="avatar-full" />
          <span className="camera-icon">📷</span>
        </div>

        <h2>Marry Doe</h2>
        <p className="email">Marry@Gmail.Com</p>
      </div>

      <p className="bio">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam.
      </p>
    </div>
  );
}
