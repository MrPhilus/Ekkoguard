import CardSkeleton from "../../components/CardSkeleton";
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/images/coming-soon-bg.jpg";
import { newsFeed } from "./Data";
import { IoMdArrowRoundBack } from "react-icons/io";

const NewsFeed = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/services");
  };

  return (
    <div>
      <div className="flex items-center justify-around p-6">
        <IoMdArrowRoundBack
          className="text-3xl cursor-pointer hover:text-olive-500"
          onClick={handleBackClick}
        />
        <h1 className="text-xl font-bold lg:text-3xl whitespace-nowrap">
          GET THE LATEST
        </h1>
        <div className="p-3"></div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          placeItems: "center",
        }}
      >
        {newsFeed.map((feed) => {
          return (
            <Link key={feed.id} to="/details">
              <CardSkeleton
                img={img}
                title={feed.title}
                body={feed.body}
                profileImg={img}
                authorName={feed.author}
                email={feed.email}
              />
            </Link>
          );
        })}
        <h1></h1>
      </div>
    </div>
  );
};

export default NewsFeed;
