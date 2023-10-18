import { useService } from '$lib/services';
import { AboutApi } from 'firefly-iii-typescript-sdk-fetch';

const aboutService = useService(AboutApi);

export const userQuery = {
	queryKey: ['user'],
	queryFn: () => aboutService.getCurrentUser()
};
