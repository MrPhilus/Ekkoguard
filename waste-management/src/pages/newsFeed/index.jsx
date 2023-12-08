import CardSkeleton from "../../components/CardSkeleton";
import { Link } from "react-router-dom";
import img from "../../assets/images/coming-soon-bg.jpg";
import { newsFeed } from "./Data";
import newsbanner from "../../assets/images/newsbanner.png";

const NewsFeed = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mb-4">
        <img className="w-1/5" src={newsbanner} alt="news banner" />
        <h1 className="text-xl font-bold">GET THE LATEST</h1>
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
