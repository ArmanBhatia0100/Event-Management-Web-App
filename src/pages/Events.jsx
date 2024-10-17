import GridLayout from "../UI/GridLayout";
import Container from "../UI/Container";
import Navbar from "../components/Navbar";
import PageTitleAndBtn from "../components/PageTitleAndBtn";
import Calendar from "../components/Calendar.jsx";
import SmallEventCard from "../components/SmallEventCard.jsx";
const Events = (props) => {
  return (
    <>
      <GridLayout>
        <Navbar />
        <Container>
          <PageTitleAndBtn title={"Events"} />
          <div className="flex flex-row gap-5 justify-around">
            <Calendar />
            <div className="flex flex-col gap-3 justify-between">
              <h1 className="text-xl font-semibold">Top 3 Event in the City</h1>
              <SmallEventCard />
              <SmallEventCard />
              <SmallEventCard />
            </div>
          </div>
        </Container>
      </GridLayout>
    </>
  );
};

export default Events;
