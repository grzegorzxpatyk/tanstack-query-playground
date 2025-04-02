import { QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import MutationComponent from './components/MutationComponent';
import { Toaster } from './components/ui/sonner';
import queryClient from './QueryClientConfig';
import QueryComponent from './components/QueryComponent';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='flex h-screen w-full flex-col items-center justify-center gap-4 bg-zinc-800'>
        <h1 className='text-5xl text-zinc-100'>Tanstack Query Playground</h1>
        <div className='flex w-1/2 flex-row items-center justify-between gap-4'>
          <QueryComponent />
          <MutationComponent />
        </div>
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
