import CardSkeleton from "../../components/CardSkeleton";
import { Link } from "react-router-dom";
import img from "../../assets/images/coming-soon-bg.jpg";
import { newsFeed } from "./Data";

const NewsFeed = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mb-14">
        <h1 className="text-3xl">page under construction!</h1>
        <h2 className="text-xl">stay tuned on!</h2>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          // border: "2px solid red",
          placeItems: "center",
        }}
      >
        {newsFeed.map((feed) => {
          return (
            <Link key={feed.id} to='/details'>
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
