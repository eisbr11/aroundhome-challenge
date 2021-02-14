import Typography from 'components/Typography';
import useStyles from './Loading.styles';

const Loading = () => {
  const classes = useStyles();
  return (
    <div className={classes.loadingWrapper}>
      <Typography>FETCHING DATA</Typography>
    </div>
  );
};

export default Loading;
