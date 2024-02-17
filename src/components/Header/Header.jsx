 import { StyledHeader, HeaderList, HeaderLink } from "./Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <HeaderList>
          <li>
            <HeaderLink to="/">
              About Us
            </HeaderLink>
          </li>
          <li>
            <HeaderLink to="/catalog">
              Our cars
            </HeaderLink>
          </li>
          <li>
            <HeaderLink to="/favorites">
              Favorites
            </HeaderLink>
          </li>
        </HeaderList>
      </nav>
    </StyledHeader>
  );
};

export default Header;