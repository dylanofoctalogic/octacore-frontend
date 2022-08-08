import { Box } from '@mui/material';

/* eslint-disable-next-line */
export interface EmptyLayoutProps {
  children: JSX.Element;
}

export function EmptyLayout(props: EmptyLayoutProps) {
  const { children } = props;
  return <Box className="h-full">{children}</Box>;
}

export default EmptyLayout;
