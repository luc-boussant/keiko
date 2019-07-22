import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 15px;
  line-height: 20px;
  width: 250px;
  height: 200px;
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
