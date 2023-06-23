import req from './simple-request';
import { getQueryParams } from '@/plugins/helpers';

export class BaseCRUD {
    static async GET ({ service, id = null, query = {}}) {
        const uri = id
            ? `${id}?${getQueryParams(query)}`
            : `?${getQueryParams(query)}`;

        return req({
            service,
            method: 'GET',
            uri,
        });
    }

    static async POST ({ service, entity, body = null }) {
        return req({
            service,
            method: 'POST',
            uri: `${entity}`,
            body,
        });
    }

    static async DELETE ({ service, entity, id, body = null }) {
        return req({
            service,
            method: 'DELETE',
            uri: id ? `${entity}/${id}` : `${entity}`,
            body,
        });
    }

    static async PATCH ({ service, entity, id, body }) {
        return req({
            service,
            method: 'PATCH',
            uri: `${entity}/${id}`,
            body,
        });
    }

    static async PUT ({ service, entity, id = null, body = null }) {
        const uri = id ? `${entity}/${id}` : `${entity}`;
        return req({
            service,
            method: 'PUT',
            uri,
            ...(body && { body }),
        });
    }
}
