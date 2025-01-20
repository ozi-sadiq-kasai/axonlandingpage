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
  background-color: var(--highlights2);
  padding-left:0.1rem;

  .logo {
    color: var(--highlights1);
    font-size: 2.5rem;
    margin-bottom: 0;
    span {
      color: var(--grey-400);
    }
    @media ${({ theme }) => theme.device.mobile} {
      font-size: 1rem;
      margin-bottom: 0;
    }
    @media ${({ theme }) => theme.device.tablet} {
      font-size: 1.7rem;
      margin-bottom: 0;
    }
  }
`;

export default NavBar;
