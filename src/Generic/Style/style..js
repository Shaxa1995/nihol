import styled from 'styled-components';


const MenuWrapper = styled.div`
  display: flex;
  gap: 10px;
  color: ${({ isdanger }) => isdanger ? 'red' : '#000'};
`;

export { MenuWrapper };


