import React from 'react';
import { render, screen } from '@testing-library/react';
import Cards from './Cards';
import { TypeCardsFields } from '../../contentful';

jest.mock('../../functions/fetchCards');

describe('Cards component', () => {
    it('should render the cards', async () => {
        const mockCardsData: TypeCardsFields = {
            cards: [
                {
                    fields: {
                        title: 'Card 1',
                        description: 'This is the first card.',
                        image: {
                            fields: {
                                file: {
                                    url: 'https://example.com/image1.jpg',
                                },
                            },
                        },
                    },
                },
                {
                    fields: {
                        title: 'Card 2',
                        description: 'This is the second card.',
                        image: {
                            fields: {
                                file: {
                                    url: 'https://example.com/image2.jpg',
                                },
                            },
                        },
                    },
                },
            ],
        };

        fetchCards.mockResolvedValue(mockCardsData);

        render(<Cards />);

        const cards = screen.getAllByRole('card');
        expect(cards).toHaveLength(2);

        expect(cards[0]).toHaveStyle({
            backgroundImage: `url(https://example.com/image1.jpg) no-repeat center`,
        });

        expect(cards[1]).toHaveStyle({
            backgroundImage: `url(https://example.com/image2.jpg) no-repeat center`,
        });
    });
});
