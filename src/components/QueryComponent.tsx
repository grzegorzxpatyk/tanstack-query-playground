import { getPost } from '@/api';
import { useQuery } from '@tanstack/react-query';

const QueryComponent = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ['post'],
        queryFn: () => getPost(1),
    });

    if (error) {
        return 'There was an error, please try again.';
    }

    if (isLoading) {
        return 'Loading...';
    }

    return (
        <div className='w-96 rounded-2xl bg-zinc-700 px-4'>
            <pre className='text-zinc-100 overflow-auto  p-4 mb-8'>
                {JSON.stringify(data, null, 2)}
            </pre>
        </div>
    )
}

export default QueryComponent;