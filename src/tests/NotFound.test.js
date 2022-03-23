import { render, screen } from '@testing-library/react';
import React from 'react';
import { NotFound } from '../components';

describe('Testando componente NotFound', () => {
  test('Verifica se a página contém o texto Page request not found', () => {
    render(<NotFound />);
    const text = screen.getByRole('heading', {
      name: /Page requested not found/i, level: 2 });
    expect(text).toBeInTheDocument();
  });

  test('Verifica se a página monstra a imagem', () => {
    render(<NotFound />);
    const img = screen.getByRole('img', { name: /Pikachu crying/i });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
