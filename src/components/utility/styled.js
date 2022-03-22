import styled from "styled-components";

export const LogIn = styled.div`
  text-align: end;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: blue;
  }
  &:active {
    color: blue;
    transform: scale(0.9);
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 33px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  border: 1px solid #f9f8f8;
  cursor: pointer;
  background-color: #31326f;
  &:active {
    transform: scale(0.9);
  }

  /* background: #372593; */
  background-color: ${(props) =>
    props.variant === "background" ? "#E3E7FF" : "#2B3492"};

  color: ${(props) => (props.variant === "background" ? "#2B3492" : "#ffffff")};
`;

export const DivContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  /* background-color: #222831; */
`;
export const HeaderFooter = styled.div`
  display: flex;
  height: 7%;
  justify-content: space-between;
  padding: 0px 20px;
  align-items: center;
  background-color: #222831;

  /* height: ${(props) => (props.variant === "heightFooter" ? "10%" : "7%")} */
`;
export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

export const ImageLogo = styled.img`
  width: 78px;
  height: 68px;
  margin: 0px;
`;
export const LogoTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: white;
`;
export const LogOut = styled(LogoTitle)`
  padding: 12px 20px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;

  background-color: ${(props) =>
    props.variant === "background" ? "#fd7014" : "#00adb5"};

  &:hover {
    background-color: ${(props) =>
      props.variant === "background" ? "#F58840" : "#00fff5"};
  }

  &:active {
    transform: scale(0.9);
  }
`;

export const Input = styled.input`
  width: 100%;
  padding-left: 15px;
  height: 32px;
  border-radius: 5px;
  outline: none;
  font-size: 14px;
  border: 1px solid gainsboro;
`;
