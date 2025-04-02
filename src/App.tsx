import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import MutationComponent from './components/MutationComponent';
import { Toaster } from './components/ui/sonner';
import { toast } from 'sonner';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
    mutations: {
      retry: false,
      onSuccess: (data) => {
        toast.success('Operation completed successfully!', {
          richColors: true,
        });
        console.log('Mutation successful:', data);
      },
      onError: (error) => {
        toast.error('Something went wrong. Please try again.', {
          richColors: true,
        });
        console.error(error);
      },
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='flex h-screen w-full flex-col items-center justify-center gap-4 bg-zinc-800'>
        <h1 className='text-5xl text-zinc-100'>Tanstack Query Playground</h1>
        <MutationComponent />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
