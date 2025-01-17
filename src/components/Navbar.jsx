import styled from 'styled-components';

const NavBar = () => {
  return (
    <Wrapper>
      <h1 className='logo'>
        AXON<span>LINK</span>
      </h1>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding-left: 1rem;
  .logo {
    color: var(--highlights2);
    font-size: 2rem;
    span {
      color: var(--grey-400);
    }
    @media ${({ theme }) => theme.device.mobile} {
      font-size: 1rem;
    }
  }
`;

export default NavBar;
