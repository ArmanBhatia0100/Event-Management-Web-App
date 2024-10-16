import GridLayout from "../UI/GridLayout";
import Container from "../UI/Container";
import Navbar from "../components/Navbar";
import PageTitleAndBtn from "../components/PageTitleAndBtn";
const Events = (props) => {
  return (
    <>
      <GridLayout>
        <Navbar />
        <Container>
          <PageTitleAndBtn title={"Events"} />
        </Container>
      </GridLayout>
    </>
  );
};

export default Events;
