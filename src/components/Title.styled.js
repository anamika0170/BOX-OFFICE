import styled from 'styled-components';

export const TitleWrapper = styled.div`
  text-align: center;
  margin: 0 0 40px;
  /* background-image: url('https://upload.wikimedia.org/wikipedia/commons/e/e6/Background_Colors_by_Peak_Hora17.jpg'); */
  background-color: #BF988F;

  h1 {
    color: ${({ theme }) => theme.mainColors.blue};
    letter-spacing: 10px;
    text-transform: uppercase;
    margin: 0 0 10px;
    
  }

  p {
    color: ${({ theme }) => theme.mainColors.dark};
    margin: 0;
    text-shadow: 1px 1px gray;
    font-size:30px;
  }
`;
