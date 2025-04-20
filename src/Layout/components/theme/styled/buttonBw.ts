import styled from "styled-components";

interface ButtonBwProps {
  $isPosition: boolean;
  theme: {
    text: string;
    toggle: string;
    hover: string;
    bgc: string;
  };
}

export const ContainerBw = styled.div`
  width: auto;
  background-color: transparent;
  transition: 0.5s all ease-in;
`;

export const Wraper = styled.div`
  width: 100%;
  max-width: 1388px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
`;

export const Text = styled.p`
  display: none;
  @media screen and (min-width: 1880px) {
    color: ${({ theme }) => theme.text};
    font-size: 1.5rem;
    font-family: "Inter";
    margin: 0;
    display: flex;
    justify-content: end;
    padding-right: 11.5rem;
  }
`;

export const SwitchBw = styled.div`
  position: relative;
  width: 60px;
  height: 35px;
  border-radius: 38px;
  background-color: ${({ theme }) => theme.bgc};
  transition: 1s all ease-in;
`;

export const ButtonBw = styled.button<ButtonBwProps>`
  position: absolute;
  cursor: pointer;
  bottom: 5px;
  left: ${({ $isPosition }) => ($isPosition ? "30px" : "5px")};
  width: 25px;
  height: 25px;
  border: none;
  border-radius: 58%;
  background-color: ${({ theme }) => (theme.bgc === "rgb(16 23 47)" ? "rgb(219 233 237)" : "rgb(16 23 47)")};
  transition: 0.4s all ease-in;
  outline: none;
  color: ${({ theme }) => (theme.bgc === "rgb(16 23 47)" ? "rgb(16 23 47)" : "rgb(219 233 237)")};
  font-family: "Inter";
  font-size: 1.1rem;
`;
