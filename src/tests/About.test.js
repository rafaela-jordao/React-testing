import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testando o componente App', () => {
  test('verifica se a aplicação contém um conjunto de links de navegação', () => {
    renderWithRouter(<App />);

    const firstLink = screen.getByRole('link', { name: 'Home' });
    const secondLink = screen.getByRole('link', { name: 'About' });
    const thirdLink = screen.getByRole('link', { name: 'Favorite Pokémons' });
    expect(firstLink).toBeDefined();
    expect(secondLink).toBeDefined();
    expect(thirdLink).toBeDefined();
  });

  test('Verifica se a aplicação é redirecionada para a página inicial', () => {
    const { history } = renderWithRouter(<App />);

    const linkEl = screen.getByRole('link', { name: /Home/i });
    expect(linkEl).toBeDefined();
    userEvent.click(linkEl);
    expect(history.location.pathname).toBe('/');
  });

  test('Verifica se a aplicação é redirecionada para a página de About', () => {
    const { history } = renderWithRouter(<App />);

    const linkEl = screen.getByRole('link', { name: /About/i });
    expect(linkEl).toBeDefined();
    userEvent.click(linkEl);
    expect(history.location.pathname).toBe('/about');
  });

  test('Verifica se a aplicação é redirecionada para a página de Pokémons Favoritados',
    () => {
      const { history } = renderWithRouter(<App />);

      const linkEl = screen.getByRole('link', { name: /Favorite Pokémons/i });
      expect(linkEl).toBeDefined();
      userEvent.click(linkEl);
      expect(history.location.pathname).toBe('/favorites');
    });

  test('Verifica se a aplicação é redirecionada para a página Not Found', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/pagina/que-nao-existe/');

    const notFoundElement = screen.getByRole('heading',
      { name: /Page requested not found/i });
    expect(notFoundElement).toBeInTheDocument();
  });
});
