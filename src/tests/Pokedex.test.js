import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testando o componente Pokedex', () => {
  test('Verifica se a página contém o texto Encountered pokémons', () => {
    renderWithRouter(<App />);
    const text = screen.getByRole('heading', { name: /Encountered pokémons/i });
    expect(text).toBeInTheDocument();
  });

  test('Exibe o próximo Pokémon quando o botão Pŕoximo pokémon é clicado', () => {
    renderWithRouter(<App />);
    const nextBtn = screen.getByRole('button', { name: /Próximo pokémon/i });
    expect(nextBtn).toBeInTheDocument();
  });

  test('Verifica se é mostrado apenas um Pokémon por vez', () => {
    renderWithRouter(<App />);
    const encounteredPokemons = screen.getAllByTestId(/pokemon-name/i);
    expect(encounteredPokemons).toHaveLength(1);
  });

  test('Verifica se a Pokédex tem os botões de filtro ', () => {
    renderWithRouter(<App />);
    const buttons = 7;
    const types = 8;

    const filterBtn = screen.getAllByTestId(/pokemon-type-button/i);
    const typePokemon = screen.getAllByTestId(/pokemon-type/i);
    const pokemon = screen.getByText(/Fire/i);

    expect(filterBtn).toHaveLength(buttons);
    expect(typePokemon).toHaveLength(types);
    expect(pokemon).toBeDefined();
  });

  test('Verifica se a Pokédex contém um botão para resetar o filtro', () => {
    renderWithRouter(<App />);
    const resetBtn = screen.getByRole('button', { name: /All/i });
    userEvent.click(resetBtn);
    expect(resetBtn).toBeInTheDocument();
  });
});
