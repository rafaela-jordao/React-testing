import { render, screen } from '@testing-library/react';
import React from 'react';
import About from '../components/About';

describe('Testando componente About', () => {
  test('Verifica se a página contém informações sobre a Pokédex', () => {
    render(<About />);
    const info = screen.getByText(/This application simulates a Pokédex/i);
    expect(info).toBeInTheDocument();
  });

  test('Verifica se a página contém um heading h2 com o texto About Pokédex ', () => {
    render(<About />);
    const text = screen.getByRole('heading', { name: /About Pokédex/i });
    expect(text).toBeInTheDocument();
  });

  test('Verifica se a página contém dois parágrafos com texto sobre a Pokédex ', () => {
    render(<About />);
    const paragraph1 = screen.getByText(/This application simulates a Pokédex/i);
    const paragraph2 = screen.queryByText(/One can filter Pokémons by type/i);
    expect(paragraph1).toBeInTheDocument();
    expect(paragraph2).toBeInTheDocument();
  });

  test('Verifica se a página contém img de uma Pokédex ', () => {
    render(<About />);
    const img = screen.getByRole('img', { name: /Pokédex/i });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
