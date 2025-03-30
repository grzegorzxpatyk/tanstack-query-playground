import { useMutation } from '@tanstack/react-query';
import { Button } from './components/ui/button';
import { updatePost } from './api';
import { toast } from 'sonner';

const MutationComponent = () => {
  const { mutate } = useMutation({
    mutationKey: ['updatePost'],
    mutationFn: updatePost,
    onSuccess: () => {
      toast.success('Post updated successfuly!', {
        richColors: true,
      });
    },
  });

  const handleCLick = () => {
    mutate({ title: 'foo', body: 'bar', userId: 1 });
  };

  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <h2 className='text-2xl text-zinc-200'>MutationTest</h2>
      <Button onClick={handleCLick}>Mutate</Button>
    </div>
  );
};

export default MutationComponent;
