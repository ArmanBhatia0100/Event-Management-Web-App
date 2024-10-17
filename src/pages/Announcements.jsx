import Navbar from "../components/Navbar";
import PageTitleAndBtn from "../components/PageTitleAndBtn";
import Container from "../UI/Container";
import GridLayout from "../UI/GridLayout";

const Announcements = (props) => {
  return (
    <div>
      <GridLayout>
        <Navbar />
        <Container>
          <PageTitleAndBtn title={"Announcements"} />
          <div className="newAnnouncements pb-5 [&>*]:p-1">
            <h1 className="text-xl font-semibold">New</h1>
            <p>While exploring the realm of React calendar components</p>
            <p>While exploring the realm of React calendar components</p>
            <p>While exploring the realm of React calendar components</p>
            <p>While exploring the realm of React calendar components</p>
          </div>
          <div className="oldAnnouncements [&>*]:p-1">
            <h1 className="text-xl font-semibold ">Old</h1>
            <p>While exploring the realm of React calendar components</p>
            <p>While exploring the realm of React calendar components</p>
            <p>While exploring the realm of React calendar components</p>
            <p>While exploring the realm of React calendar components</p>
          </div>
        </Container>
      </GridLayout>
    </div>
  );
};

export default Announcements;
