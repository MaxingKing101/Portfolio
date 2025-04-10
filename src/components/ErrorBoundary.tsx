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
              className="group rounded-full px-8 py-6 text-white font-medium flex items-center gap-2 justify-center bg-gradient-to-r from-brand-blue via-brand-light-purple to-brand-purple relative overflow-hidden transition-all duration-300 text-xl hover:shadow-lg hover:shadow-purple-500/20 w-full"
              onClick={() => window.location.reload()}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-light-purple to-brand-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-x"></div>
              <div className="relative z-10">Try Again</div>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
