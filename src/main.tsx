import ReactDOM from 'react-dom/client';
import './app/styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ThemeProvider from '@/app/providers/ThemeProvider/ui/ThemeProvider.tsx';
import App from '@/app/App.tsx';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { QueryProvider } from '@/app/providers/QueryClientProvider/ui/QueryClientProvider.tsx';
import { StoreProvider } from '@/app/providers/StoreProvider/ui/StoreProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!)
    .render(
        <ErrorBoundary>
            <BrowserRouter>
                <QueryProvider>
                    <ThemeProvider>
                        <StoreProvider>
                            <App />
                            <ToastContainer
                                closeOnClick
                                pauseOnHover
                                theme="dark"
                                toastStyle={{ backgroundColor: 'var(--bg-color)' }}
                            />
                        </StoreProvider>
                    </ThemeProvider>
                </QueryProvider>
            </BrowserRouter>
        </ErrorBoundary>,
    );
