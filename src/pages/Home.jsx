import Container from "../UI/Container";
import GridLayout from "../UI/GridLayout";
import Navbar from "../components/Navbar";
import EventCard from "../components/EventCard.jsx";
import Button from "@mui/material/Button";

const Home = (props) => {
  let cardImgArry = [
    "https://cdn.pixabay.com/photo/2023/11/28/21/35/ural-owl-8418249_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/09/25/15/53/japan-9074037_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/09/28/11/31/halloween-7484855_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/04/28/18/18/mountains-7957191_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/09/25/15/53/japan-9074037_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/09/28/11/31/halloween-7484855_1280.jpg",
  ];
  return (
    <GridLayout>
      <Navbar />
      <Container styleStringInTailwind={"overflow-hidden"}>
        <div className="titleAndBtn flex flex-row justify-between mb-7 ">
          <h1 className="text-2xl inline-block font-semibold">Home</h1>
          <Button variant="contained">Contained</Button>
        </div>
        <div className="eventCardsContainer flex flex-row overflow-scroll max-w-[97%] flex-nowrap gap-5 py-4 no-scrollbar bg-slate-50">
          {cardImgArry.map((imgURL, index) => {
            return <EventCard key={index} imgURL={imgURL} />;
          })}
        </div>
      </Container>
    </GridLayout>
  );
};

export default Home;
