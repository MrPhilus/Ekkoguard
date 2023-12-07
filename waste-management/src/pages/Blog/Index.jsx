import CardSkeleton from "../../components/CardSkeleton";
import { useParams} from "react-router-dom";

const Blog = () => {
  const params = useParams();
  console.log(params);
  // console.log(van);

  return (
    <div
    // style={{
    //   display: "flex",
    //   flexDirection: "column",
    //   alignItems: "center",
    //   justifyContent: "center",
    // }}
    >
      <p>page under construction!</p>
      <p>stay tuned on articles on truck and van maintainance!</p>
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
