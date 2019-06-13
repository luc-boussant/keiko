import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 30px;
  padding: 30px;
`;

export const StyledList = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const StyledLoader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  font-size: 20px;
  color: black;
  text-decoration: none;
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;
