import { Suspense, lazy, useState, useEffect } from 'react';
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";

const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

interface AppProps {
  // Add any additional props here
}

const App: React.FC<AppProps> = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const image = new Image();
        // Use the correct path based on deployment environment
        const getImagePath = () => {
          if (process.env.NODE_ENV === 'production') {
            // Check if we're on GitHub Pages
            if (window.location.hostname === 'maxingkingvfx.github.io') {
              return 'https://maxingkingvfx.github.io/portfolio/Background-image/timeline-editing.png';
            }
            // Check if we're on Cloudflare Pages
            if (window.location.hostname.includes('pages.dev')) {
              return '/Background-image/timeline-editing.png'; // Cloudflare Pages uses relative paths
            }
            // Default to relative path for other production environments
            return '/Background-image/timeline-editing.png';
          }
          // Local development
          return '/Background-image/timeline-editing.png';
        };

        image.src = getImagePath();
        await new Promise((resolve, reject) => {
          image.onload = resolve;
          image.onerror = reject;
        });
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading image:', error);
        setIsLoading(false);
      }
    };

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200); // 1.2 seconds delay

    loadImage();

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
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
