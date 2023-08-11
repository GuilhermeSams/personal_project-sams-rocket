type Transmition = {
  id: number
  title: string
  href: string
  description: string
}

export default function navbarDataTransmition(): Transmition[] {
  const dataTransmition: Transmition[] = [
    {
      id: 1,
      title: 'Space Orbit',
      href: '/transmissoes/space-orbit',
      description:
        'Pedro Palota, dono do canal no Youtube chamado Space Orbit, faz live de lançamento de foguetes.',
    },
    {
      id: 2,
      title: 'Space Today',
      href: '#',
      description:
        'Sergio Sacani, é geofísico, mas ama astronomia e o setor aeroespacial, ele faz live de eventos astronômicos e foguetes.',
    },
    {
      id: 3,
      title: 'Dobra Espacial',
      href: '#',
      description:
        'Muitos chamam de Dino, ele faz vídeos com uma qualidade absurda, os documentários dele sobre o Space Shuttle são sensacionais.',
    },
    {
      id: 4,
      title: 'Café e Ciência',
      href: '#',
      description:
        'Físico e Astrônomo, ele já falou que eu sou masoquista por estudar Engenharia.',
    },
    {
      id: 5,
      title: 'Ned Oliveira',
      href: '#',
      description:
        'Inteligente, ama astronomia e foguetes, participa dos podcasts do Ciência sem fim.',
    },
  ]

  return dataTransmition
}
