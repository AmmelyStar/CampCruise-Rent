import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const moveCarAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(calc(100% - 40px));
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #90caf9;
  position: relative;
  overflow: hidden; /* Щоб стрілка не виходила за межі хедера */

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: -40px; /* Початкова позиція машинки */
    width: 40px;
    height: 20px;
    background-color: #4caf50; /* Колір машинки */
    border-radius: 10px;
    animation: ${moveCarAnimation} 5s linear infinite;
  }
`;

export const LogoWrapper = styled.div`
  margin-right: 20px;
`;

export const LogoText = styled.p`
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 18px;
  font-weight: bold;
  color: white;
  text-decoration: none;
`;

export const Navigation = styled.nav`
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    position: relative;
  }

  li {
    display: inline;
    margin-right: 20px;
  }

  a {
    text-decoration: none;
    color: white;
  }

  a:hover {
    color: #f44336;
  }
`;