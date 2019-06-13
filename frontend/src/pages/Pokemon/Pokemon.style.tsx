import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 15px;
  line-height: 20px;
  margin: 20px;
`;

export const Title = styled.div`
  text-transform: capitalize;
  padding: 10px;
  font-size: 30px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const ImageList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 200px;
`;

export const Image = styled.img`
  height: 100px;
`;

export const StyledButton = styled.div`
  position: absolute;
  margin-top: 5px;
  margin-left: 215px;
`;

export const StyledLoader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;
