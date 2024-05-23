import React, { Component, ErrorInfo } from 'react';
import { Stack, Typography } from '@mui/material';

interface ErrorBoundaryProps {
    children: React.ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
        };
    }

    static getDerivedStateFromError(error: Error) {
        // Обновляем состояние, чтобы следующий рендер отобразил запасной UI.
        return { hasError: true, error };
    }

    componentDidCatch(_error: Error, errorInfo: ErrorInfo) {
        // Можно также отправить ошибку в аналитику
        this.setState({ errorInfo });
    }

    render() {
        const { hasError, error, errorInfo } = this.state;

        if (hasError) {
            // Можно отобразить запасной UI
            return (
                <Stack
                    spacing={1}
                    width="50%"
                    justifyContent="center"
                    my={6}
                    mx="auto"
                >
                    <Typography variant="h2">Что-то пошло не так.</Typography>
                    <Typography variant="h4" color="error">{error?.toString()}</Typography>
                    <Typography component="p">{errorInfo?.componentStack}</Typography>
                </Stack>
            );
        }
        // Если нет ошибки, просто отрендерим дочерние компоненты
        // eslint-disable-next-line react/destructuring-assignment
        return this.props.children;
    }
}

export default ErrorBoundary;
