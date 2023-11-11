import { useService } from '$lib/services';
import { AboutApi } from '$lib/api';

const aboutService = useService(AboutApi);

export const userQuery = {
	queryKey: ['user'],
	queryFn: () => aboutService.getCurrentUser()
};
