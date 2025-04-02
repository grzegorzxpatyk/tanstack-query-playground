import { QueryClient } from '@tanstack/react-query';
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

  export default queryClient;