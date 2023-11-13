import { client } from '../client';
import { TypeHeaderFields } from '../contentful';

async function fetchHeader() {
    try {
        const response = await client.getEntries({
            content_type: 'header',
        });

        const data = response.items[0].fields as TypeHeaderFields;

        return data;
    } catch (error) {
        console.log(error);
    }
}

export default fetchHeader;
