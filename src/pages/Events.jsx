import GridLayout from "../UI/GridLayout";
import Container from "../UI/Container";
import Navbar from "../components/Navbar";
import PageTitleAndBtn from "../components/PageTitleAndBtn";
import Calendar from "../components/Calendar.jsx";
const Events = (props) => {
  return (
    <>
      <GridLayout>
        <Navbar />
        <Container>
          <PageTitleAndBtn title={"Events"} />
          <div className="max-w-96">
            <Calendar />
          </div>
        </Container>
      </GridLayout>
    </>
  );
};

export default Events;
