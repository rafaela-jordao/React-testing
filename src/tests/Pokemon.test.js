import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testando o componente Pokémon ', () => {
  test('Verifica se é renderizado um card com as infos de determinado Pokémon', () => {
    renderWithRouter(<App />);
    const namePokemon = screen.getByTestId('pokemon-name');
    const typePokemon = screen.getByTestId('pokemon-type');
    const weightPokemon = screen.getAllByTestId(/pokemon-weight/);
    const imgPokemon = screen.getByAltText('Pikachu sprite');

    expect(namePokemon).toHaveTextContent('Pikachu');
    expect(typePokemon).toHaveTextContent('Electric');
    expect(weightPokemon).toHaveLength(1);
    expect(imgPokemon).toBeInTheDocument();
    expect(imgPokemon).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });

  test('Verifica se o card do Pokémon contém um link de navegação', () => {
    renderWithRouter(<App />);
    const linkDetails = screen.getByRole('link', { name: /More details/i });
    expect(linkDetails).toBeDefined();
  });
  test('Ao clicar no link é feito o redirecionamento para a "pg" de detalhes', () => {
    const { history } = renderWithRouter(<App />);

    const link = screen.getByRole('link', { name: /More details/i });
    userEvent.click(link);
    expect(history.location.pathname).toBe('/pokemons/25');
  });

  test('Verifica se existe um ícone de estrela nos Pokémons favoritados', () => {
    renderWithRouter(<App />);

    const link = screen.getByRole('link', { name: /More details/i });
    userEvent.click(link);
    const checked = screen.getByRole('checkbox');
    userEvent.click(checked);

    const iconFavorite = screen.getByAltText('Pikachu is marked as favorite');
    expect(iconFavorite.src).toContain('/star-icon.svg');
  });
});
