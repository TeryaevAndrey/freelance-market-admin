import "./App.css";
import { Routing } from "./routing";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RegionsProvider } from "./shared/contexts/RegionsContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RegionsProvider>
        <Routing />
      </RegionsProvider>
    </QueryClientProvider>
  );
}

export default App;
