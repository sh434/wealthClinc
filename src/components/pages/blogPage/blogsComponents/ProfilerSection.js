function ProfilerSection({ name, date }) {
  const styleText = {
    color: "var( --global-light-text)",
    borderTop: "1px solid rgba(255,255,255,0.6)",
  };
  return (
    <div className="row" style={styleText}>
      <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2 center-item">
        <i class="bi bi-person-circle fs-3"></i>
      </div>
      <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 col-8">
        <div className="text-dark">{name}</div>
        <div>{date}</div>
      </div>
      <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2 center-item">
        <i class="bi bi-bookmark fs-5 p-2"></i>
      </div>
    </div>
  );
}

export default ProfilerSection;
