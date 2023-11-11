import { AboutApi } from '$lib/api';
import { useService } from '$lib/services';

const aboutService = useService(AboutApi);

export const userQuery = {
	queryKey: ['user'],
	queryFn: () => aboutService.getCurrentUser()
};
