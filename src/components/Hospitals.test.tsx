// import { render, screen, waitFor, fireEvent } from '@testing-library/react';
// import { rest } from 'msw';
// import { setupServer } from 'msw/node';
// import MyHospitals from './Hospitals';

// // Mock the API response
// const server = setupServer(
//   rest.get('https://api.reliancehmo.com/v3/providers', (req, res, ctx) => {
//     return res(ctx.json({
//       data: [
//         { id: 1, name: 'Hospital A', state: { name: 'Lagos' } },
//         { id: 2, name: 'Hospital B', state: { name: 'Abuja' } },
//       ]
//     }));
//   })
// );

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

// describe('MyHospitals', () => {
//   test('renders hospitals list', async () => {
//     render(<MyHospitals />);

//     await waitFor(() => {
//       expect(screen.getByText('Hospital A')).toBeInTheDocument();
//       expect(screen.getByText('Hospital B')).toBeInTheDocument();
//     });
//   });

//   test('filters hospitals based on search input', async () => {
//     render(<MyHospitals />);

//     await waitFor(() => {
//       expect(screen.getByText('Hospital A')).toBeInTheDocument();
//       expect(screen.getByText('Hospital B')).toBeInTheDocument();
//     });

//     const searchInput = screen.getByPlaceholderText('Search by city or state');
//     fireEvent.change(searchInput, { target: { value: 'Lagos' } });

//     await waitFor(() => {
//       expect(screen.getByText('Hospital A')).toBeInTheDocument();
//       expect(screen.queryByText('Hospital B')).not.toBeInTheDocument();
//     });
//   });

//   test('displays correct number of hospitals', async () => {
//     render(<MyHospitals />);

//     await waitFor(() => {
//       expect(screen.getByText('Showing 2 Locations')).toBeInTheDocument();
//     });
//   });
// });