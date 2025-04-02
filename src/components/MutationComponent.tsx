import { useMutation } from '@tanstack/react-query';
import { Button } from './ui/button';
import { updatePost } from '../api';
import { toast } from 'sonner';
import queryClient from '@/QueryClientConfig';

const MutationComponent = () => {
  const { mutate } = useMutation({
    mutationKey: ['updatePost'],
    mutationFn: updatePost,
    onSuccess: (updatedData) => {
      queryClient.setQueryData(['post'], updatedData);
      toast.success('Post updated successfuly!', {
        richColors: true,
      });
    },
  });

  const handleCLick = () => {
    mutate({
      id: 1,
      payload: { title: 'DUPA', body: 'JA PIERDOLE', userId: 69 },
    });
  };

  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <h2 className='text-2xl text-zinc-200'>MutationTest</h2>
      <Button onClick={handleCLick}>Mutate</Button>
    </div>
  );
};

export default MutationComponent;
