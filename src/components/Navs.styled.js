import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0 0 30px;
  padding: 0;
  
`;

export const LinkStyled = styled(Link)`
/* background-image:url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxbgI4s9RsCa62p4tQtBjhqpBIiY3Ux51thA&usqp=CAU'); */
background-color: #A7907F;
  margin: 0 10px;
  padding: 3px 15px;
  position: relative;
  font-size: 20px;
  text-decoration: none;
  font-weight:bold;
  color: ${({ theme }) => theme.mainColors.blue};
  &.active {
    color: ${({ theme }) => theme.mainColors.blue};
    &:after {
      content: '';
      position: absolute;
      display: block;
      height: 2px;
      left: 0%;
      bottom: 0;
      background-color: ${({ theme }) => theme.mainColors.blue};
      animation: slide-in 0.3s ease-in forwards;
      @keyframes slide-in {
        from {
          left: 50%;
          width: 0;
        }
        to {
          left: 0%;
          width: 100%;
        }
      }
    }
  }
`;
