import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import fetchCards from '../functions/fetchCards';
import Cards from './Cards';

jest.mock('../functions/fetchCards'); // Mock the fetchCards function

describe('Cards component', () => {
    test('renders cards', async () => {
        // Mock data to be returned by fetchCards
        const mockData = {
            cards: [
                {
                    fields: {
                        title: 'Card 1',
                        description: 'Description 1',
                        showTitle: true,
                        image: {
                            fields: {
                                file: {
                                    url: 'http://example.com/image1.jpg',
                                },
                            },
                        },
                    },
                },
                // Add more mock card data as needed
            ],
        };

        // Set up the mock implementation for fetchCards
        fetchCards.mockResolvedValue(mockData);

        // Render the component
        render(<Cards />);

        // Wait for the data to be loaded
        await waitFor(() => {
            // Check that the card elements are present
            const cardElement = screen.getByTestId('card-Card 1');
            expect(cardElement).toBeInTheDocument();

            // Check that the title and description are rendered
            expect(screen.getByText('Card 1')).toBeInTheDocument();
            expect(screen.getByText('Description 1')).toBeInTheDocument();

            // Add more assertions based on your component structure
        });
    });
});
