import styled from "styled-components";

export const StyledBurgerMenu = styled.button`
  position: absolute;
  top: 3%;
  right: 6%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 101;
  
  @media (min-width:769px) {
       display:none;
     }
  &:focus {
    outline: none;
  }
   @media (max-width:600px) {
      cursor:auto;
   }
     
  div {
    width: 2rem;
    height: 0.25rem;
    background: #49494A;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({open}) => open ? 'rotate(44deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({open}) => open ? '0' : '1'};
      transform: ${({open}) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background: #49494A;

  transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 73vh;
  text-align: left;

  position: absolute;
  top: 90px;
  right: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 100;
  @media (max-width: 576px) {
      width: 100%;
    }
  @media (min-width:805px) {
      display:none;
     }

  a {
    font-size: 18px;
    letter-spacing: 0.1rem;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 300px) {
      text-align: center;
      font-size: 12px;
    }
  }
`;
