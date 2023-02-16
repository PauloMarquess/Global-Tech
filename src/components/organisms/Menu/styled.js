import styled from 'styled-components';
import COLORS from '../../../constants/colors';

export const Title = styled.h1`
  color: ${COLORS.secondaryBlue};
`;

export const Container = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 20px 0px;
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  a {
    text-decoration: none;
    color: #222;
  }

  @media (max-width: 769px) {
    display: none;
  }
`;

export const Lista = styled.li`
  margin-left: 100px;

  :hover {
    cursor: pointer;
    color: ${COLORS.secondaryBlue};
  }
`;

export const Side = styled.div`
  display: none;

  @media (max-width: 769px) {
    display: block;
  }
`;
