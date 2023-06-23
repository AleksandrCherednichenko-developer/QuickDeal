import { BaseCRUD } from '@/services/base-request';
import { toastError, toastSuccess } from '@/composables/toast';

export class TaskService {
    /**
     * @returns {Promise<Response>}
     */
    static async getTasksList () {
        const resp = await BaseCRUD.GET({
            service: 'todos',
        });

        if (!resp.status.ok) {
            toastError('server_error');
            return null;
        }
        return resp.payload;
    }
}
