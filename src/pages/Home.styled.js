import styled from 'styled-components';

export const SearchInput = styled.input`
  display: block;
  font-family: 'Roboto', sans-serif;
  width: 206px;
  margin: auto;
  outline: none;
  padding: 13px 15px;
  border: 1px solid #dbdbdb;
  ${'' /* box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5); */}
  font-size: 14px;
  border-radius: 12px;
  color: black;
  ${'' /* margin-left: 85px; */}
  

  &::placeholder {
    font-weight: 300;
    color: #8d8d8d;
  }
`;

export const RadioInputsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  div {
    margin: 0 15px;
  }
`;

export const SearchButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 35px;
  color:white;

  button {
    color: #fff;
    background-color: ${({ theme }) => theme.mainColors.blue};
    margin: auto;
    padding: 10px 50px;
    font-size: 20px;
    border: none;
    outline: none;
    border-radius: 12px;
    font-weight: bold;
    background-color: lightseagreen;
    &:hover {
      cursor: pointer;
    }
  }
`;
