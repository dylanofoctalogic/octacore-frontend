import { ReactNode } from 'react';
import { useMatch, useResolvedPath } from 'react-router-dom';
import { teal, grey } from '@mui/material/colors';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

/* eslint-disable-next-line */
export interface SidebarItemProps {
  icon: ReactNode;
  label: string;
  path: string;
  navigateTo: (path: string) => void;
}

export function SidebarItem(props: SidebarItemProps) {
  const { icon, label, path, navigateTo } = props;

  const resolved = useResolvedPath(path);
  const match = useMatch({ path: resolved.pathname, end: true });
  const isMatched = match !== null;

  return (
    <ListItem
      disablePadding
      sx={{
        backgroundColor: isMatched ? teal[50] : undefined,
        borderRadius: '0.5rem',
        marginY: '0.25rem',
      }}
    >
      <ListItemButton
        selected={match !== null}
        onClick={() => {
          console.log('path', path);
          navigateTo(path);
        }}
        sx={{
          borderRadius: '0.5rem',
        }}
      >
        <ListItemIcon sx={{ color: isMatched ? 'secondary.dark' : undefined }}>
          {icon}
        </ListItemIcon>
        <ListItemText
          primary={label}
          sx={{
            color: isMatched ? 'secondary.dark' : undefined,
          }}
          primaryTypographyProps={{
            sx: {
              fontWeight: isMatched ? 'semi-bold' : undefined,
            },
          }}
        />
      </ListItemButton>
    </ListItem>
  );
}

export default SidebarItem;
