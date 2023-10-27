import profile_sergio_sacani from 'public/sergio-sacani.png'

import CardTransmition from '@/components/card-transmition'

export default function SpaceOrbit() {
  return (
    <main>
      <CardTransmition
        img={profile_sergio_sacani}
        altImg={'Pedro Pallota Do canal Space Orbit'}
        name={'Sérgio Sacani'}
        about={'GeoFisíco Engenheiro, divulgador científico'}
        description={
          'Dono do Canal Space Today e do Podcast Ciência Sem Fim, o maior icone da divulgação científica do Brasil.'
        }
        hrefYoutube={'https://www.youtube.com/@SpaceToday'}
        hrefX={'https://twitter.com/SpaceToday1'}
        hrefStore={'https://www.spacetodaystore.com/'}
        descriptionVideo={'Descoberta do James Webb'}
        srcVideo={
          'https://www.youtube.com/embed/_C8Ve1adETA?si=a_wCSj--1dFTlT9B'
        }
      />
    </main>
  )
}
