import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Link from '../../components/link/link';
import HorizontalRule from '../../components/horizontal-rule/horizontal-rule';

const PrivacyPolicy = () => {
  return (
    <>
      <Box sx={{ maxWidth: '71.25rem', margin: '0 auto', padding: '0 1rem' }}>
        <Typography
          component="h2"
          sx={{
            color: 'text.primary',
            fontSize: '2rem',
            textAlign: 'center',
            marginBottom: '1.5rem',
          }}
        >
          Privacy Policy
        </Typography>
        <Typography
          component="p"
          sx={{
            color: 'text.primary',
            fontSize: '1rem',
            marginBottom: '1rem',
            marginTop: '0.5rem',
          }}
        >
          Your privacy is important to us. It is Octalogic Tech&apos;s policy to
          respect your privacy regarding any information we may collect from you
          across our website,&nbsp;
          <Link
            href="/"
            sx={{
              color: '#007bff',
              textDecoration: 'none',
              ':hover': { color: '#0056b3', textDecoration: 'underline' },
            }}
          >
            https://octalogic.in/
          </Link>
          , and other sites we own and operate.
        </Typography>
        <Typography
          component="p"
          sx={{
            color: 'text.primary',
            fontSize: '1rem',
            marginBottom: '1rem',
            marginTop: '0.5rem',
          }}
        >
          We only ask for personal information when we truly need it to provide
          a service to you. We collect it by fair and lawful means, with your
          knowledge and consent. We also let you know why we’re collecting it
          and how it will be used.
        </Typography>
        <Typography
          component="p"
          sx={{
            color: 'text.primary',
            fontSize: '1rem',
            marginBottom: '1rem',
            marginTop: '0.5rem',
          }}
        >
          We only retain collected information for as long as necessary to
          provide you with your requested service. What data we store, we’ll
          protect within commercially acceptable means to prevent loss and
          theft, as well as unauthorised access, disclosure, copying, use or
          modification.
        </Typography>
        <Typography
          component="p"
          sx={{
            color: 'text.primary',
            fontSize: '1rem',
            marginBottom: '1rem',
            marginTop: '0.5rem',
          }}
        >
          We don’t share any personally identifying information publicly or with
          third-parties, except when required to by law.
        </Typography>
        <Typography
          component="p"
          sx={{
            color: 'text.primary',
            fontSize: '1rem',
            marginBottom: '1rem',
            marginTop: '0.5rem',
          }}
        >
          Our website may link to external sites that are not operated by us.
          Please be aware that we have no control over the content and practices
          of these sites, and cannot accept responsibility or liability for
          their respective privacy policies.
        </Typography>
        <Typography
          component="p"
          sx={{
            color: 'text.primary',
            fontSize: '1rem',
            marginBottom: '1rem',
            marginTop: '0.5rem',
          }}
        >
          You are free to refuse our request for your personal information, with
          the understanding that we may be unable to provide you with some of
          your desired services.
        </Typography>
        <Typography
          component="p"
          sx={{
            color: 'text.primary',
            fontSize: '1rem',
            marginBottom: '1rem',
            marginTop: '0.5rem',
          }}
        >
          Your continued use of our website will be regarded as acceptance of
          our practices around privacy and personal information. If you have any
          questions about how we handle user data and personal information, feel
          free to contact us.
        </Typography>
        <Typography
          component="p"
          sx={{
            color: 'text.primary',
            fontSize: '1rem',
            marginBottom: '1rem',
            marginTop: '0.5rem',
          }}
        >
          This policy is effective as of 1 March 2017.
        </Typography>
      </Box>
      <HorizontalRule />
    </>
  );
};

export default PrivacyPolicy;
