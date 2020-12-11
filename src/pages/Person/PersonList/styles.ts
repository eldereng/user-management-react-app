import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PersonGallery = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin: 0px 16px 0 16px;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  border: 1px solid #d3d4d5;
  margin: 16px 32px;
  border-radius: 8px;
  padding: 8px 16px;
  max-width: 600px;

  a {
    margin: 8px 32px;
    padding: 4px 8px;
    border: none;
    border-radius: 8px;
    background-color: #245c2b;
    color: white;
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.3);
    text-decoration: none;
  }

  p {
    color: #777;
    strong {
      color: #111;
      font-weight: 700;
    }
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Avatar = styled.div`
  img {
    width: 48px;
    height: 48px;
    display: cover;
    border-radius: 50%;
    border: 1px solid #d3d4d5;
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.3);
  }
`;

export const CardBody = styled.div`
  margin: 16px;

  h3 {
    font-size: 14px;
    font-weight: 700;
  }

  h4 {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 2px;
  }

  p {
    font-size: 8px;
    margin-top: 8px;
    color: #777;
  }
`;

export const PersonItem = styled.div`
  height: 120px;
  width: 260px;
  background: #fffffe;
  padding: 8px 8px;
  border-radius: 8px;
  margin: 16px 8px;
  position: relative;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.3);
  animation: ${fadeIn} 1s;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  transition: 400ms;

  :hover {
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.7);
  }
`;

export const SearchInput = styled.form`
  border: 1px solid #d3d4d5;
  width: 200px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  input {
    width: 100%;
    border: none;
    padding-left: 8px;
    color: #333;

    :-webkit-autofill,
    :-webkit-autofill:hover,
    :-webkit-autofill:focus,
    :-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
    }
  }

  button {
    background: #fff;
    border: none;
    border-radius: inherit;
    display: flex;
    align-items: center;
  }
`;
