import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
`;

export const Repository = styled.div`
  width: 250px;
  background: #fff;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin: 0 10px;

  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    strong {
      font-size: 24px;
      margin-top: 10px;
    }

    small {
      font-size: 14px;
      color: #666;
      display: flex;
      justify-content: center;
    }

    img {
      width: 64px;
    }
  }

  ul {
    list-style: none;
    li {
      font-weight: bold;
      padding: 12px 20px;
      display: flex;
      justify-content: center;

      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
        margin-left: 10px;
      }

      &:nth-child(2n-1) {
        background: #f5f5f5;
      }
    }
  }

  div.buttons-container {
    padding: 10px 20px;
    display: flex;
    justify-content: space-around;
    button {
      padding: 5px 10px;
      border-radius: 5px;
      font-size: 12px;
      font-weight: bold;
      i {
        margin-right: 3px;
      }
      &:nth-child(2n) {
        border: 1px solid #c11927;
        color: #fff;
        background: #aa1622;
        &:hover {
          background: #c11927;
          color: #fff;
        }
      }
      &:nth-child(2n - 1) {
        border: 1px solid #116088;
        color: #fff;
        background: #0e5071;
        &:hover {
          background: #116088;
          color: #fff;
        }
      }
    }
`;
