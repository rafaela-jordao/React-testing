import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../App';
import { FavoritePokemons } from '../components';
import renderWithRouter from '../renderWithRouter';

describe('Testando o componente FavoritePokemons', () => {
  test('Verifica se é exibido a mensagem No favorite pokemon found', () => {
    render(<FavoritePokemons />);
    const message = screen.getByText(/No favorite pokemon found/i);
    expect(message).toBeInTheDocument();
  });

  test('teste se é exibido todos os cards de pokémons favoritados', () => {
    renderWithRouter(<App />);
    const favorites = screen.getAllByTestId(/pokemon-name/i);
    // console.log(favorites);
    expect(favorites).toHaveLength(1);
  });
});
