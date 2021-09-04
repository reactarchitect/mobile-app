/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useEffect } from 'react';
 import {
   StyleSheet
 } from 'react-native';
 
 import {
   Colors,
 } from 'react-native/Libraries/NewAppScreen';
 import Landing from './app/Components/Landing';
 import { Provider } from 'react-redux';
 import { getPersistor } from '@rematch/persist';
 import { PersistGate } from 'redux-persist/lib/integration/react';
 import store from './app/Redux/Store';
 
 const App: () => React$Node = () => {
 
   useEffect(() => {

   }, []);
 
   return (
     <>
       <Provider store={store}>
         <PersistGate persistor={getPersistor()}>
           <Landing />
         </PersistGate>
       </Provider>
     </>
   );
 };
 
 const styles = StyleSheet.create({
   scrollView: {
     backgroundColor: Colors.lighter,
   },
   engine: {
     position: 'absolute',
     right: 0,
   },
   body: {
     backgroundColor: Colors.white,
   },
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
     color: Colors.black,
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
     color: Colors.dark,
   },
   highlight: {
     fontWeight: '700',
   },
   footer: {
     color: Colors.dark,
     fontSize: 12,
     fontWeight: '600',
     padding: 4,
     paddingRight: 12,
     textAlign: 'right',
   },
 });
 
 export default App;
 
