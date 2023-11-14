import { client } from '../client';
import { TypeCardsFields } from '../contentful';

async function fetchCards() {
    try {
        const response = await client.getEntries({
            content_type: 'cards',
        });

        const data = response.items[0].fields as TypeCardsFields;

        return data;
    } catch (error) {
        console.error(error);
    }
}

export default fetchCards;
