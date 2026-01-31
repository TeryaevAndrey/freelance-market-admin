import "./App.css";
import { Routing } from "./routing";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RegionsProvider } from "./shared/contexts/RegionsContext";
import { Toaster } from "./shared/ui/sonner";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RegionsProvider>
        <Routing />

        <Toaster />
      </RegionsProvider>
    </QueryClientProvider>
  );
}

export default App;
