import Container from "../UI/Container";
import GridLayout from "../UI/GridLayout";
import Navbar from "../components/Navbar";
import EventCard from "../components/EventCard.jsx";
import PageTitleAndBtn from "../components/PageTitleAndBtn.jsx";

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
        <PageTitleAndBtn title={"Home"} />
        <div className="flex flex-row flex-nowrap gap-5 bg-slate-50 p-2 overflow-scroll eventCardsContainer no-scrollbar">
          {cardImgArry.map((imgURL, index) => {
            return <EventCard key={index} imgURL={imgURL} />;
          })}
        </div>
      </Container>
    </GridLayout>
  );
};

export default Home;
