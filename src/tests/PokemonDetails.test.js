import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testando o componente PokemonDetails', () => {
  test('Verifica se as infos detalhadas do Pokémon são mostradas na tela', () => {
    renderWithRouter(<App />);

    const details = screen.getByRole('link', { name: /More details/i });
    userEvent.click(details);

    const namePokemon = screen.getByRole('heading', { name: /Pikachu Details/i });
    const summary = screen.getByRole('heading', { name: /Summary/i, level: 2 });
    const paragraph = screen.getByText(/This intelligent Pokémon/i);

    expect(namePokemon).toBeInTheDocument();
    expect(summary).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
  });

  test('Verifica a existência de mapas contendo a localização do pokémon', () => {
    renderWithRouter(<App />);

    const details = screen.getByRole('link', { name: /More details/i });
    userEvent.click(details);

    const text = screen.getByRole('heading',
      { name: /Game Locations of Pikachu/i, level: 2 });
    const locations = screen.getAllByText(/kanto/i);
    const imgLocation = screen.getAllByRole('img', { name: /Pikachu location/i });

    expect(text).toBeInTheDocument();
    expect(locations).toBeDefined();
    expect(imgLocation[0]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(imgLocation[1]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
  });

  test('Verifica se o usuário pode favoritar através da pg de detalhes', () => {
    renderWithRouter(<App />);
    const details = screen.getByRole('link', { name: /More details/i });
    userEvent.click(details);

    const checkbox = screen.getByRole('checkbox');
    userEvent.type(checkbox);
    const label = screen.getByLabelText('Pokémon favoritado?');

    expect(checkbox).toBeInTheDocument();
    expect(label).toBeDefined();
  });
});
