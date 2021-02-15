import { useTheme } from 'react-jss';

import useStyles from './Footer.styles';

const Footer = ({
  children,
}: {
  children: React.ReactNode,
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <footer className={classes.footer}>
      {children}
    </footer>
  );
};

export default Footer;
