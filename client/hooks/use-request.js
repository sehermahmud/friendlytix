import axios from 'axios';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));
export default ({ url, method, body, onSuccess }) => {
  const classes = useStyles();
  const [errors, setErrors] = useState(null);

  const doRequest = async () => {
    try {
      setErrors(null);
      const response = await axios[method](url, body);

      if (onSuccess) {
        onSuccess(response.data);
      }

      return response.data;
    } catch (err) {
      setErrors(
        <div className={classes.root}>
          <Alert severity="error">
            <AlertTitle>Ooops....</AlertTitle>
            <ul>
              {err.response.data.errors.map((err) => (
                <li key={err.message}>{err.message}</li>
              ))}
            </ul>
          </Alert>
        </div>
      );
    }
  };

  return { doRequest, errors };
};
