import React, { useState, useEffect } from "react";
import "./styles.css";
import { newsFeed } from "../../pages/newsFeed/Data";

const CardSkeleton = ({
  img,
  title,
  profileImg,
  postId,
  id,
  name,
  authorName,
  email,
  body,
  fetchDataCallback,
  ...rest
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate API fetch after 3 seconds
      setTimeout(async () => {
        try {
          const dummyData = {
            title: "Title",
            body: "Body",
            authorName: "Author",
          };

          setData(dummyData);
          setIsLoading(false);
          if (fetchDataCallback) {
            fetchDataCallback(dummyData); // You can pass the data to a callback function if needed
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }, 1000);
    };

    fetchData();
  }, [fetchDataCallback]);

  return (
    <>
      {isLoading ? (
        <div className="card" style={{ marginBottom: "2em" }}>
          <div className="card-header animated-bg">&nbsp;</div>
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
                <strong className="animated-bg animated-bg-text">&nbsp;</strong>
                <small className="animated-bg animated-bg-text">&nbsp;</small>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="card" style={{ marginBottom: "2em" }}>
          <div className="card-header" id="header">
            <img src={img} alt="" />
          </div>
          <div className="card-content">
            <h3 className="card-title text-2xl " id="title">
              {title}
            </h3>
            <p className="card-excerpt" id="excerpt">
              {body}
            </p>
            <div className="author">
              <div className="profile-img" id="profile_img">
                <img src={profileImg} alt="" />
              </div>
              <div className="author-info">
                <strong className="" id="name">
                  {authorName}
                </strong>
                <small className="" id="date">
                  {email}
                </small>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardSkeleton;
