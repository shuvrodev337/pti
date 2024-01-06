import Banner from "../../components/Banner/Banner";
import FoodSliders from "../../components/FoodSlider/FoodSliders";
import Container from "../../components/Shared/Container";

const Home = () => {
  return (
    <div>
      <Container>
        <Banner></Banner>
        <FoodSliders></FoodSliders>
      </Container>
    </div>
  );
};

export default Home;
