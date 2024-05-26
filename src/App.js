import React from 'react';
import { Provider } from 'react-redux';
import QuoteBox from './components/QuotesBox/QuotesBox';
import store from './redux/store';
import Footer from "../src/components/Footer";

const App = () => (
  <Provider store={store}>
    <QuoteBox />
    <Footer />
  </Provider>
);

export default App;
