import { Dispatch, Fragment, ReactNode, SetStateAction, useState } from 'react';
import MaterialTable, { Action } from '@material-table/core';
import { Menu, MenuItem, Typography, ListItemIcon } from '@mui/material';

export interface MaterialTableOverflowMenu {
  id?: string | undefined;
  anchorEl: HTMLInputElement | null;
  setAnchorEl: Dispatch<SetStateAction<null>>;
  selectedRow: Record<string, unknown>;
  actions: {
    callback: (arg0: object) => void;
    icon: ReactNode;
    label: string;
    hidden?: boolean;
    disabled?: boolean;
  }[];
}

export function MaterialTableOverflowMenu(props: MaterialTableOverflowMenu) {
  const { id, actions, anchorEl, setAnchorEl, selectedRow } = props;

  return (
    <Menu
      id={id || 'simple-menu'}
      data-testid="overflow-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={() => setAnchorEl(null)}
      disableScrollLock
    >
      {actions.map((action) => {
        const isHidden = action.hidden;
        return isHidden ? (
          ''
        ) : (
          <MenuItem
            onClick={() => {
              setAnchorEl(null);
              action.callback(selectedRow);
            }}
            className="text-gray-700"
            disabled={action.disabled}
            data-testid={action.label}
          >
            <ListItemIcon className="min-w-fit">{action.icon}</ListItemIcon>
            <Typography variant="inherit">{action.label}</Typography>
          </MenuItem>
        );
      })}
    </Menu>
  );
}

/* eslint-disable-next-line */
export interface MaterialTableProps {
  title: string;
  isLoading: boolean;
  options?: Record<string, unknown>;
  columns: Record<string, unknown>[];
  data: Record<string, unknown>[];
  actions?: Action<Record<string, unknown>>[];
  overflowActions?: {
    callback: (arg0: any) => void;
    icon: ReactNode;
    label: string;
    hidden?: boolean;
    disabled?: boolean;
  }[];
  setSelectedRow?: Dispatch<SetStateAction<any>>;
  selectedRow?: any;
}

export function OctaMaterialTable(props: MaterialTableProps) {
  const {
    title,
    isLoading,
    options,
    columns,
    data,
    actions = [],
    overflowActions = [],
    setSelectedRow,
    selectedRow = {},
  } = props;

  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  return (
    <Fragment>
      <MaterialTable
        title={title}
        isLoading={isLoading}
        options={{
          pageSize: 10,
          pageSizeOptions: [5, 10, 20],
          maxColumnSort: 2,
          ...options,
        }}
        columns={[...columns]}
        data={data}
        actions={[
          {
            icon: 'more_vert',
            tooltip: 'More Options',
            onClick: (event: any, rowData: any) => {
              setMenuAnchorEl(event.currentTarget);
              setSelectedRow && setSelectedRow(rowData);
            },
          },
          ...actions,
        ]}
      />
      <MaterialTableOverflowMenu
        actions={overflowActions}
        anchorEl={menuAnchorEl}
        setAnchorEl={setMenuAnchorEl}
        selectedRow={selectedRow}
      />
    </Fragment>
  );
}
