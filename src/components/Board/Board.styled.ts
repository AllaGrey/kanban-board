import styled from "styled-components";

export const BoardStyled = styled.div`
  display: flex;
  padding: 10px;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.boxShadow.card};
  border: 2px solid ${({ theme }) => theme.colors.secondaryColor};
  gap: 15px;
  justify-content: space-between;
`;
