import { UseMutationOptions } from '@tanstack/react-query';
import { toast } from 'sonner';

type MutationConfig<TData, TError, TVariables, TContext> = Partial<
  UseMutationOptions<TData, TError, TVariables, TContext>
>;

interface ToastOptions {
  successMessage?: string;
  errorMessage?: string;
  duration?: number;
}

export default function useMutationConfig<TData, TError, TVariables, TContext>(
  toastOptions?: ToastOptions
): MutationConfig<TData, TError, TVariables, TContext> {
  return {
    onSuccess: (data: TData) => {
      toast.success(
        toastOptions?.successMessage || 'Operation completed successfully!',
        {
          richColors: true,
        }
      );
      console.log('Mutation successful:', data);
    },
    onError: (error) => {
      toast.error(
        toastOptions?.errorMessage || 'Something went wrong. Please try again.',
        {
          richColors: true,
        }
      );
      console.error(error);
    },
  };
}
