type Company = {
  id: number
  title: string
  href: string
  description: string
}

export default function navbarDataCompany(): Company[] {
  const dataCompany: Company[] = [
    {
      id: 1,
      title: 'SpaceX',
      href: '#',
      description:
        'A SpaceX é uma empresa privada revolucionária de exploração espacial.',
    },
    {
      id: 2,
      title: 'NASA',
      href: '#',
      description:
        'A NASA é a agência espacial pioneira, desbravando fronteiras cósmicas.',
    },
    {
      id: 3,
      title: 'AEB',
      href: '#',
      description:
        'AEB: Agência Espacial Brasileira, impulsionando o Brasil rumo ao espaço.',
    },
    {
      id: 4,
      title: 'Rocket Lab',
      href: '#',
      description:
        'Inovação audaciosa, lançando pequenos foguetes para grandes conquistas.',
    },
    {
      id: 5,
      title: 'Ariane Space',
      href: '#',
      description:
        'Líder europeia, impulsionando missões espaciais com excelência tecnológica',
    },
    {
      id: 6,
      title: 'United Launch Alliance (ULA)',
      href: '#',
      description:
        'Parceria Boeing-Lockheed Martin, líder em lançamentos confiáveis e inovadores',
    },
  ]

  return dataCompany
}
