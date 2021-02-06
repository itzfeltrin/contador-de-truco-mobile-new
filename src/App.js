import React, {useState} from 'react';
import {Navigator} from './routes';
import {Loader} from './components/loader';

import {RecoilRoot} from 'recoil';
import axios from 'axios';

axios.defaults.baseURL = 'https://truco-api.herokuapp.com/';

const App = () => {
  const [loading, setLoading] = useState(false);

  axios.interceptors.request.use(
    (config) => {
      setLoading(true);
      return config;
    },
    (err) => {
      return err;
    },
  );

  axios.interceptors.response.use(
    (res) => {
      setLoading(false);
      return res;
    },
    (err) => {
      setLoading(false);
      return err;
    },
  );

  return (
    <RecoilRoot>
      <Loader loading={loading} />
      <Navigator />
    </RecoilRoot>
  );
};

export default App;
