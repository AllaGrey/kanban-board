import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.boxShadow.card};
  border: 2px solid ${({ theme }) => theme.colors.secondaryColor};
`;
