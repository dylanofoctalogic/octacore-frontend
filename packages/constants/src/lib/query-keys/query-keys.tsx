import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface QueryKeysProps {}

const StyledQueryKeys = styled.div`
  color: pink;
`;

export function QueryKeys(props: QueryKeysProps) {
  return (
    <StyledQueryKeys>
      <h1>Welcome to QueryKeys!</h1>
    </StyledQueryKeys>
  );
}

export default QueryKeys;
