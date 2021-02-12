import Footer from 'components/Footer';
import Header from 'components/Header';
import { useTheme } from 'react-jss';
import useStyles from './Layout.styles';
import { LayoutComponentProps } from './Layout.types';

const Layout = ({ children }: LayoutComponentProps) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <div className={classes.pageWrap}>
      <Header />
      <main className={classes.main}>
        {children}
      </main>
      <Footer>
        TESTFooter
      </Footer>
    </div>
  );
};

export default Layout;
