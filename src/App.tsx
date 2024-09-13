import './App.css'
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { ConfigProvider } from 'antd';



function App() {
 return (
  <Provider store={store}>
   <PersistGate loading={null} persistor={persistor}>
    <ConfigProvider theme={{
     components: {
      Button: { colorPrimary: '#1043A6', fontWeight: 500, colorPrimaryText: '#F9F5FF', colorPrimaryHover: '#140a66', colorPrimaryActive: '#140a66', }
     }
    }}>
     <div className="w-full h-screen bg-[#090E16]">
      <RouterProvider router={router} />
     </div>
    </ConfigProvider>
   </PersistGate>
  </Provider>
 );
}





export default App;
