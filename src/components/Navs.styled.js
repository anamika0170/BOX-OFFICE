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
${'' /* background-color: #F1E0D6;
  margin: 0 10px;
  padding: 3px 15px;
  position: relative;
  font-size: 20px;
  text-decoration: none;
  font-weight:bold; */}
  display: block;
    background-color: #e9ebde;
    margin: 0px 22px;
    padding: 6px 30px;
    position: relative;
    font-size: 20px;
    -webkit-text-decoration: none;
    text-decoration: none;
    font-weight: bold;
    color: black;
    border-radius: 9px;
    padding-bottom: 12px;
    text-align: center;
  color: ${({ theme }) => theme.mainColors.black};
  &.active {
    color: ${({ theme }) => theme.mainColors.darkblue};
    text-decoration:underline;
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
