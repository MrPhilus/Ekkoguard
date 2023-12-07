import CardSkeleton from "../../components/CardSkeleton";
import { useParams } from "react-router-dom";

const Blog = () => {
  const params = useParams();
  console.log(params);

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
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <h1></h1>
      </div>
    </div>
  );
};

export default Blog;
