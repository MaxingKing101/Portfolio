import { Suspense, lazy, useState, useEffect } from 'react';
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import { preloadAllImages } from "./lib/preload-utils";

const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

interface AppProps {
  // Add any additional props here
}

const App: React.FC<AppProps> = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadAllImages = async () => {
      try {
        // Preload all images in the project without displaying progress
        await preloadAllImages();
      } catch {
        // Silently ignore errors and continue without preloading
      } finally {
        setIsLoading(false);
      }
    };

    // Set a maximum loading time to ensure the app doesn't get stuck
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds maximum loading time

    loadAllImages();

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-brand-deepest-blue text-white">
        <div className="w-16 h-16 border-4 border-t-brand-purple border-r-brand-light-purple border-b-brand-blue border-l-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-lg font-medium">Loading assets...</p>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <HashRouter>
            <Suspense fallback={null}>
              <Routes>
                <Route path="/" element={<Index />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </HashRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
