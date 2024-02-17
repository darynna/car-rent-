import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { Container } from "./SharedLayout.styled";

const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default SharedLayout;