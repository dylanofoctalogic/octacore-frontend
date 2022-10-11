import { ReactNode } from 'react';
import { useMatch, useResolvedPath } from 'react-router-dom';
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
    <ListItem disablePadding sx={{ backgroundColor: 'grey.300' }}>
      <ListItemButton
        selected={match !== null}
        onClick={() => {
          console.log('path', path);
          navigateTo(path);
        }}
      >
        <ListItemIcon sx={{ color: isMatched ? 'secondary.dark' : undefined }}>
          {icon}
        </ListItemIcon>
        <ListItemText
          primary={label}
          sx={{ color: isMatched ? 'secondary.dark' : undefined }}
        />
      </ListItemButton>
    </ListItem>
  );
}

export default SidebarItem;
