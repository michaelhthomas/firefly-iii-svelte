import { createQuery } from '@tanstack/svelte-query';

import { AboutApi } from '$lib/api';
import { queryClient } from '$lib/client';
import { useService } from '$lib/services';

const aboutService = useService(AboutApi);

export const userStore = createQuery({
	context: queryClient,
	queryFn: () => aboutService.getCurrentUser()
});
