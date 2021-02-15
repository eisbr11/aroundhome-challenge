import { useTheme } from 'react-jss';

import AroundHomeIcon from 'components/AroundHomeIcon';
import useStyles from './Header.styles';

/**
 * Header component
 *
 * @returns {JSX}
 * @constructor
 */
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
