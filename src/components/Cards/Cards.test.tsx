import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Cards from '../path/to/Cards';
import fetchCards from '../../functions/fetchCards';

jest.mock('../../functions/fetchCards');

const mockData = {
    cards: [
        {
            fields: {
                title: 'Test Card 1',
                description: 'Test Description 1',
                image: {
                    fields: {
                        file: {
                            url: 'test-url-1',
                        },
                    },
                },
            },
        },
        // Add more cards as needed
    ],
};

beforeEach(() => {
    (fetchCards as jest.Mock).mockResolvedValue(mockData);
});

test('renders without crashing', () => {
    render(<Cards />);
});

test('calls fetchCards on mount', async () => {
    render(<Cards />);
    await waitFor(() => expect(fetchCards).toHaveBeenCalledTimes(1));
});

test('renders cards correctly', async () => {
    render(<Cards />);
    await waitFor(() => screen.getByText('Test Card 1'));
    expect(screen.getByText('Test Card 1')).toBeInTheDocument();
    expect(screen.getByText('Test Description 1')).toBeInTheDocument();
});