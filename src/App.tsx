import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import MutationTest from './MutationComponent';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
        },
        mutations: {
            retry: false,
        },
    },
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="flex h-screen w-full flex-col items-center justify-center gap-4 bg-zinc-800">
                <h1 className="text-5xl text-zinc-100">
                    Tanstack Query Playground
                </h1>
                <MutationTest />
            </div>
        </QueryClientProvider>
    );
}

export default App;
