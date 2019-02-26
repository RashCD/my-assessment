import styled from 'styled-components';

export const Line = styled.div(({ style }) => ({
  display: 'block',
  height: '3px',
  border: '0',
  borderTop: '1px solid #ccc',
  margin: '1em 0',
  padding: '0',
  ...style,
}));
