import AroundHomeIcon from 'components/AroundHomeIcon';
import { useTheme } from 'react-jss';
import useStyles from './Header.styles';

const Header = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <header className={classes.header}>
      <AroundHomeIcon />
    </header>
  );
};

export default Header;