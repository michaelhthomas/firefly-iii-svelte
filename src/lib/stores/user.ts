import { queryClient } from '$lib/client';
import { useService } from '$lib/services';
import { createQuery } from '@tanstack/svelte-query';
import { AboutApi } from 'firefly-iii-typescript-sdk-fetch';

const aboutService = useService(AboutApi);

export const userStore = createQuery({
	context: queryClient,
	queryFn: () => aboutService.getCurrentUser()
});
