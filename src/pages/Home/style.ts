import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  background: #1d1e22;

  .box {
    background: #d4d4dc;
    color: #d4d4dc;
    width: 80%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    .box-inner {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      justify-content: center;
      width: 95%;
      height: 95%;
      background: linear-gradient(
        270deg,
        #393f4d 0%,
        #1d2027 50.76%,
        #393f4d 101.78%
      );
      box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.25);

      .sec-1 {
        margin: 1.5vw;
        padding: 0.75vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .img-rap {
          width: 60%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          .img-logo {
            width: 100%;
            filter: drop-shadow(6px 6px 6px rgba(0, 0, 0, 0.9));
          }
          .bar {
            height: 8px;
            width: 80%;
            background-color: #febf02;
            margin: 30px 0;
            border-radius: 10px;
          }
        }
        .data {
          font-size: 2.5vw;
        }
        .price {
          font-size: 2.3vw;
          font-family: Racing Sans One;
          border: 2px solid #febf02;
          border-left: 0;
          border-right: 0;
          margin: 1rem;
          padding: 2px;
        }
        .description {
          font-size: 1.3vw;
          width: 75%;
          margin: 0.2vw;
          text-align: justify;
        }
        ul {
          width: 80%;
          list-style-type: none;
          display: flex;
          align-items: center;
          justify-content: space-around;
          margin: 0.2vw;
          li {
            padding: 0.2vw 0;
            font-size: 1vw;
            padding-bottom: 10px;
            border-bottom: 2px solid #febf02;
          }
        }
        .share {
          width: 80%;
          margin: 0.4vw;
          font-family: 'Do Hyeon', sans-serif;
          h2 {
            font-size: 1.5vw;
            text-align: center;
            margin-bottom: 0.4vw;
          }
          .share-buttons {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        }
      }

      .sec-2 {
        margin: 1.5vw;
        padding: 0.75vw;
        display: flex;
        height: 80%;
        align-items: center;
        justify-content: center;
        margin: 1rem;
        h1 {
          text-align: center;
          text-decoration: underline;
          font-size: 1.1vw;
          margin-bottom: 0.75vw;
        }
        form {
          height: 100%;
          margin: 0.75vw;
          font-size: 1vw;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          .question {
            display: flex;
            align-items: center;
            align-self: flex-start;
            margin: 0.5vw;
            font-size: 1vw;
            h2 {
              font-size: 1vw;
            }
          }

          select {
            width: 100%;
            padding: 0.75vw;
            border-radius: 10px;
            background: white;
          }

          .sel-patrimony {
            select {
              font-size: 0.75vw;
              padding: 0.3rem;
              border: 0;
              background: white;
              &:focus {
                outline: none;
              }
            }
          }
        }
        .investiments-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin: 0.5rem;

          .input-div {
            font-size: 1vw;
            input[type='checkbox'] {
              margin-right: 1rem;
              display: inline;

              -ms-transform: scale(2); /* IE */
              -moz-transform: scale(2); /* FF */
              -webkit-transform: scale(2); /* Safari and Chrome */
              -o-transform: scale(2); /* Opera */
              transform: scale(2);
              padding: 10px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 1025px) {
    .sec-2 {
      height: 95%;
    }
  }
  @media (max-width: 800px) {
    height: unset;
    overflow: 'auto';

    .box {
      margin: 20px 0;
      .box-inner {
        display: flex;
        flex-direction: column;
        .sec-2 {
          height: unset;
          width: 95%;
          form {
            width: 100%;
          }
          .investiments-container {
            grid-template-columns: 1fr;
          }
        }
      }
    }
  }
`;

export const ContainerMobile = styled.div`
  background: #1d1e22;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #d4d4dc;

  .sec-1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    .img-rap {
      width: 80%;
      margin: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 100%;
      }
      .bar {
        height: 8px;
        width: 80%;
        background-color: #febf02;
        margin: 30px 0;
        border-radius: 10px;
      }
    }
    .data {
      font-size: 1.5rem;
    }
    .price {
      font-size: 1.5rem;
      font-family: Racing Sans One;
      border: 2px solid #febf02;
      border-left: 0;
      border-right: 0;
      margin: 1rem;
      padding: 2px;
    }
    .description {
      font-size: 1rem;
      width: 100%;
      padding: 0 1rem;
      margin: 0.5rem;
      text-align: justify;
    }
    ul {
      width: 80%;
      list-style-type: none;
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin: 0.8rem;
      li {
        padding: 0.2vw 0;
        font-size: 1rem;
        padding-bottom: 10px;
        border-bottom: 2px solid #febf02;
      }
    }
    .share {
      width: 80%;
      margin: 1.3rem;
      font-family: 'Do Hyeon', sans-serif;
      h2 {
        font-size: 1.3rem;
        text-align: center;
        margin-bottom: 1.3rem;
      }
      .share-buttons {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
  .sec-2 {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      text-align: center;
      text-decoration: underline;
      font-size: 1rem;
      margin-bottom: 1rem;
    }
    form {
      height: 100%;
      margin: 1rem;
      font-size: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      .question {
        display: flex;
        align-items: center;
        align-self: flex-start;
        margin: 0.5vw;
        font-size: 1rem;
        h2 {
          font-size: 1rem;
        }
      }

      select {
        width: 100%;
        padding: 0.8rem;
        border-radius: 10px;
        background: white;
      }
    }
    .investiments-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      margin: 0.5rem;

      input[type='checkbox'] {
        margin-right: 1rem;
      }
    }
  }
`;
