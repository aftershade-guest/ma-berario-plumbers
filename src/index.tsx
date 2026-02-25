import React, {StrictMode} from 'react';
import App from './App.tsx';
import {BrowserRouter} from 'react-router-dom';
import {createRoot} from "react-dom/client";

const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error("Could not find root element to mount to");
}

const root = createRoot(rootElement);
root.render(
    <StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </StrictMode>
);
