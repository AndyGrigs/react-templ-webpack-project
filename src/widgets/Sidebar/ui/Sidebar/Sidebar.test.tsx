import { fireEvent, render, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';


describe('Button', () => {
    test('with only first param', () => {
        render(<Sidebar/>);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
});

// import {
//     renderWithTranslation,
// } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

// describe('Sidebar', () => {
//     test('with only first param', () => {
//         renderWithTranslation(<Sidebar />);
//         expect(screen.getByTestId('sidebar')).toBeInTheDocument();
//     });

//     test('test toggle', () => {
//         renderWithTranslation(<Sidebar />);
//         const toggleBtn = screen.getByTestId('sidebar-toggle');
//         expect(screen.getByTestId('sidebar')).toBeInTheDocument();
//         fireEvent.click(toggleBtn);
//         expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
//     });
// });
