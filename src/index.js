import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import 'modern-normalize';
import { ChakraProvider, Container, Flex, VStack } from '@chakra-ui/react';

const IndexPage = () => {
  <Container maxW="container.xl" p={0} >
    <Flex h="100vh" py={16}>
      <VStack
        w="full"
        h="full"
        p={10}
        spacing={10}
        alignItems="flex-start"
        bg="gray.50" >
      </VStack>

    </Flex>
  </Container>
} 
// import './styles.css';
// const theme = {
//   colors: {
//     primary: '#232323',
//     accent: '#6085d3',
//     white: '#fdfdfd',
//     black: '#000000',
//   },
// };

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <ChakraProvider ChakraProvider >
            <Container>
              <App />
            </Container>
           
          </ChakraProvider>  
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

export default IndexPage;
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
