import styled from 'styled-components';

export const MainDataWrapper = styled.div`
  display: flex;
  margin-bottom: 40px;
  color:white;

  img {
    min-width: 250px;
    width: 300px;
    max-height: 450px;
    border: 1px solid #ddd;
    border-radius: 40px;
  }

  .text-side {
    margin-left: 20px;
    color:white;
    .summary {
      color: white;
      line-height: 1.5;
    }
  }

  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
    color:white;
    img {
      margin-bottom: 20px;
      margin: auto;
    }
    .text-side {
      margin-left: 0;
      margin-top: 20px;
      color:white;
    }
  }
`;

export const Headline = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  color:white;

  h1 {
    margin: 0;
    border-right: 1px solid #ddd;
    padding-right: 25px;
    margin-right: 20px;
    color:white;
  }

  div {
    display: flex;
    align-items: center;
    color:white;
    span {
      margin-left: 10px;
      color:white;
    }
  }
`;

export const TagList = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  color:white;

  span {
    margin: 6px;
    margin-bottom: 0;
    color: white;
    background-color: blue;
    padding: 3px 13px;
    border-radius: 20px;
    font-size: 14px;
    color:white;
  }
`;
