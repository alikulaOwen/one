import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './App';
import { store } from './app/store';




const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <Provider store={store} >
       <App/>
    </Provider>);