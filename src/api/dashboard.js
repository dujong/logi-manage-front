import { dashboard } from '.';

export function getDashboard(params) {
	return dashboard.get('/', { params });
}
