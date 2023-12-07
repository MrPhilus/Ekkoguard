import "./styles.css";


const CardSkeleton = () => {
  return (
    <>
      <div className="card" style={{marginBottom: '2em'}}>
        <div className="card-header animated-bg" id="header">
          &nbsp;
        </div>
        <div className="card-content">
          <h3 className="card-title animated-bg animated-bg-text" id="title">
            &nbsp;
          </h3>
          <p className="card-excerpt" id="excerpt">
            &nbsp;
            <span className="animated-bg animated-bg-text">&nbsp;</span>
            <span className="animated-bg animated-bg-text">&nbsp;</span>
            <span className="animated-bg animated-bg-text">&nbsp;</span>
          </p>
          <div className="author">
            <div className="profile-img animated-bg" id="profile_img">
              &nbsp;
            </div>
            <div className="author-info">
              <strong className="animated-bg animated-bg-text" id="name">
                &nbsp;
              </strong>
              <small className="animated-bg animated-bg-text" id="date">
                &nbsp;
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSkeleton;
