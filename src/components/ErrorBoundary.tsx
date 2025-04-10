import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public override render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-brand-deepest-blue text-white">
          <div className="text-center p-4 sm:p-8 w-full max-w-md mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Something went wrong</h2>
            <p className="mb-4">Please try refreshing the page.</p>
            <button
              className="bg-brand-primary px-8 py-4 sm:py-3 text-lg sm:text-xl rounded-lg hover:bg-brand-primary-dark transition-colors duration-300 w-full shadow-lg hover:shadow-xl transform hover:scale-105"
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
