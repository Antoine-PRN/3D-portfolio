import ReactDOM from 'react-dom/client';
import App from "./App";
import './index.css'
import { MatomoProvider, createInstance } from '@datapunt/matomo-tracker-react'

const instance = createInstance({
    urlBase: 'https://matomo.antoine-perrin.fr',
    siteId: 1,
})


ReactDOM.createRoot(document.getElementById("root")).render(
    <MatomoProvider value={instance}>
        <App />
    </MatomoProvider>
)
