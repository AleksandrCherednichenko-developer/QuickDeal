import { useToast } from 'vue-toastification';
import { toastTimeout } from '@/constants/default-variables';

const toast = useToast();

export const toastSuccess = text => {
    return toast.success(text, { timeout: toastTimeout });
};

export const toastError = text => {
    return toast.error(text, { timeout: toastTimeout });
};
