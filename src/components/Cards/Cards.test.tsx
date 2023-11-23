import React from 'react';
import { render, screen } from '@testing-library/react';
import Cards from './Cards';
import { TypeCardsFields } from '../../contentful';
import CardsMock from './Cards-mock';

const mockFetchCards = jest.fn();
const fetchCards = '../../functions/fetchCards';

describe('Cards component', () => {
    it('should render the cards', async () => {
        const mockCardsData: TypeCardsFields =
            CardsMock.cards as TypeCardsFields;

        mockFetchCards.mockImplementation(() => Promise.resolve(mockCardsData));

        jest.mock(fetchCards, () => mockFetchCards);

        render(<Cards />);

        const cards = screen.getAllByRole('card');
        expect(cards).toHaveLength(2);

        /*expect(cards[0]).toHaveProperty('backgroundImage');

        expect(cards[0]).toHaveStyle({
            backgroundImage: `url(https://example.com/image1.jpg) no-repeat center`,
        });
        /*
        expect(cards[1]).toHaveStyle({
            backgroundImage: `url(https://example.com/image2.jpg) no-repeat center`,
        });*/
    });
});
