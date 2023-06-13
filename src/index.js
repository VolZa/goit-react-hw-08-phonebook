import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import 'modern-normalize';
// import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { ThemeProvider } from 'styled-components';
// import { App } from 'components/App';
// import { store } from 'redux/store';

// // import './index.css';

// const theme = {
//   colors: {
//     primary: '#232323',
//     accent: '#6085d3',
//     white: '#fdfdfd',
//     black: '#000000',
//   },
// };

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <ThemeProvider theme={theme}>
//         <Provider store={store}>
//           <App />
//         </Provider>
//     </ThemeProvider>
//   </React.StrictMode>
// );
