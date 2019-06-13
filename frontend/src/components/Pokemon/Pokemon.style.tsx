import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Card = styled.div`
  font-size: 15px;
  line-height: 20px;
  border-style: double;
  border-width: 5px;
  margin: 10px;
`;

export const Title = styled.div`
  text-transform: capitalize;
  padding: 10px;
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
`;

export const Image = styled.img`
  height: 150px;
`;

export const StyledButton = styled.div`
  position: absolute;
  margin-top: 5px;
  margin-left: 215px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 200px;
  color: black;
  text-decoration: none;
`;
