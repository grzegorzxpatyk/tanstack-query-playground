import { Button } from './components/ui/button';

const MutationTest = () => {
  const handleCLick = () => {
    console.log('Mutation triggered!');
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h2 className="text-2xl text-zinc-200">MutationTest</h2>
      <Button onClick={handleCLick}>Mutate</Button>
    </div>
  );
};

export default MutationTest;
