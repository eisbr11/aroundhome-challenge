import useStyles from './Layout.styles';

const Layout = () => {
  const classes = useStyles();
  return (
    <div className={classes.pageWrap}>
      <header>
        HEAD
      </header>
      <main className={classes.container}>
        <h1 className={classes.h1}>THE LAYOUT</h1>
      </main>
      <footer>
        Footer
      </footer>
    </div>
  );
};

export default Layout;
