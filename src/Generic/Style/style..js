import styled from 'styled-components';


const MenuWrapper = styled.div`
  display: flex;
  gap: 10px;
  color: ${({ isDanger }) => isDanger ? 'red' : '#000'};
`;

export { MenuWrapper };


