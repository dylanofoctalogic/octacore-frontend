import { Grid, Typography, ButtonBase, Icon } from '@mui/material';

/* eslint-disable-next-line */
export interface AppSidebarItemProps {
  icon: string;
  label: string;
  path: string;
  navigateTo: (path: string) => void;
}

export function AppSidebarItem(props: AppSidebarItemProps) {
  const { icon, label, path, navigateTo } = props;

  const origin = window.location.origin;

  const isMatched = path === origin;

  return (
    <ButtonBase
      onClick={() => {
        navigateTo(path);
      }}
      sx={{ width: '100%' }}
    >
      <Grid
        container
        direction="column"
        alignContent="center"
        sx={{
          padding: '0.5rem',
          backgroundColor: isMatched ? 'grey.200' : undefined,
          borderTopLeftRadius: '0.5rem',
          borderBottomLeftRadius: '0.5rem',
        }}
      >
        <Grid item xs={12} container justifyContent="center">
          <Icon sx={{ color: isMatched ? 'secondary.dark' : undefined }}>
            {icon}
          </Icon>
        </Grid>
        <Typography
          variant="caption"
          sx={{ color: isMatched ? 'secondary.dark' : undefined }}
        >
          {label}
        </Typography>
      </Grid>
    </ButtonBase>
  );
}

export default AppSidebarItem;
