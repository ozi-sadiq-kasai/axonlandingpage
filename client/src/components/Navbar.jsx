import styled from 'styled-components';
import {Link} from 'react-router-dom'
import Logo from '../assets/logo.png'

const NavBar = () => {
  return (
    <Wrapper>
      <img src={Logo} alt="logo" className='img' />
      <NavLinks>
        <li><Link href="#">Home</Link></li>
        <li><Link href="#">Join</Link></li>
        <li><Link href="#">Privacy Policy</Link></li>
      </NavLinks>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  border:1px solid red;
  display:flex;
  gap:1px;
  justify-content:space-between;
  align-items:center;
 img{
    width:12%;
    flex:0;
    @media ${({theme}) => theme.device.max.mobile}{
    width:14%;
    }
 }

  // .img {
  // border:1px solid red;
  // background-color:white;
   
  //   @media ${({ theme }) => theme.device.mobile} {
  //     font-size: 1.5rem;
  //     margin-bottom: 0;
  //   }
  //   @media ${({ theme }) => theme.device.tablet} {
  //     font-size: 1.7rem;
  //     margin-bottom: 0;
  //   }
  // }
`;
const NavLinks = styled.ul`
border:1px solid green;
display:flex;
// flex:0.5;
justify-content:space-evenly;
  @media ${({theme}) => theme.device.max.mobile}{
    flex:1;
    justify-content:space-around;
   a{
    color:var(--black);
    font-size:12px;
    font-weight:400
    }
    
    }
`

export default NavBar;
