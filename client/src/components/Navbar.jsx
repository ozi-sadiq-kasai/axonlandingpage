import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <Wrapper>
      <img src={Logo} alt="logo" className="img" />
      <NavLinks>
        <li>
          <Link href="#">Home</Link>
        </li>
        <li>
          <Link href="#">Join</Link>
        </li>
        <li>
          <Link href="#">Privacy Policy</Link>
        </li>
      </NavLinks>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 1rem 0;
  display: flex;
  gap: 1px;
  justify-content: space-between;
  align-items: center;
  img {
    width: 17%;
    @media ${({ theme }) => theme.device.max.mobile} {
      width: 25%;
    }
  }
`;
const NavLinks = styled.ul`
  display: flex;
  flex: 0.7;
  justify-content: space-around;
  a {
    color: var(--black);
    font-size: 1rem;
    font-weight: 400;
  }
  @media ${({ theme }) => theme.device.max.mobile} {
    flex: 1;
    a {
      font-size: 11.5px;
    }
  }
`;

export default NavBar;
