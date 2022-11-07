import Box from '@mui/material/Box';

import Image from 'next/image';

import Link from '../link/link';

const FooterLink = ({ name, href }) => {
  return (
    <Box
      sx={{
        flex: '0 0 16.666667%',
        maxWidth: '16.666667%',
        textAlign: 'center',
        padding: '0.25rem',
      }}
    >
      <Link
        href={href}
        underline="none"
        color="info.main"
        sx={{
          textTransform: 'unset',
          fontSize: '1rem',
          fontWeight: '400',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          opacity: '0.70',
          transition: 'opacity 0.2s',
          ':hover': {
            opacity: '1',
          },
        }}
      >
        {name}
      </Link>
    </Box>
  );
};

export function Footer() {
  return (
    <Box
      sx={{
        borderTop: '1px solid #000',
        height: '22.375rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Box sx={{ marginTop: '3rem' }}>
        <Image
          src="/octalogic.svg"
          alt="Octalogic logo"
          width={60}
          height={60}
          style={{ cursor: 'pointer' }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '3rem',
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            marginBottom: '0.5rem',
          }}
        >
          <FooterLink name={'Contact'} href={'contact'} />
          <FooterLink name={'Home'} href={'/'} />
          <FooterLink name={'Digital Marketing'} href={'digital-marketing'} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            marginBottom: '0.5rem',
          }}
        >
          <FooterLink name={'Privacy'} href={'privacy-policy'} />
          <FooterLink name={'About'} href={'about'} />
          <FooterLink name={'Web Dev'} href={'web-development'} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            marginBottom: '0.5rem',
          }}
        >
          <FooterLink name={'Terms of Service'} href={'terms-of-service'} />
          <FooterLink name={'Services'} href={'services'} />
          <FooterLink name={'Mobile Dev'} href={'mobile-development'} />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '3rem',
        }}
      >
        Socials
      </Box>
    </Box>
  );
}

export default Footer;
