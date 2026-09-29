import Container from "@/Components/Container/Container";
import Counter from "./shared/Counter";

const HomePage = () => {
  return (
    <div>
      <Container>
        <div className="h-screen w-full flex items-center justify-center">
          <Counter />
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
