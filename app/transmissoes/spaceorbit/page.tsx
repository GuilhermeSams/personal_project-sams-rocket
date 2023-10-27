import profile_pedro_pallota from 'public/profile_pedro_pallota.jpg'

import CardTransmition from '@/components/card-transmition'

export default function SpaceOrbit() {
  return (
    <main>
      <CardTransmition
        img={profile_pedro_pallota}
        altImg={'Pedro Pallota Do canal Space Orbit'}
        name={'Pedro Pallotta'}
        about={'GeoFisíco, fascinado em aeronáutica e astronomia'}
        description={
          'Notícias sobre o espaço, lançamentos de foguetes, histórias dos programas espaciais.'
        }
        hrefYoutube={'https://www.youtube.com/@SpaceOrbit'}
        hrefX={'https://twitter.com/PallottaPedro'}
        hrefStore={'https://spaceorbit.com.br/'}
        descriptionVideo={'Teste de voo da Starship'}
        srcVideo={
          'https://www.youtube.com/embed/LizMO0dK43U?si=6h0KPv36JkzS5DBN'
        }
      />
    </main>
  )
}
