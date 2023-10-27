import profile_hime from 'public/hime.jpg'

import CardTransmition from '@/components/card-transmition'

export default function CafeeCiencia() {
  return (
    <main>
      <CardTransmition
        img={profile_hime}
        altImg={'Pedro Pallota Do canal Space Orbit'}
        name={'Felipe Hime'}
        about={'Astrônomo, programador e entusiasta de tecnologia.'}
        description={'Astrônomo e Youtuber. Lives todos os dias no Youtube!'}
        hrefYoutube={'https://www.youtube.com/@felipehime'}
        hrefX={'https://twitter.com/felipehime'}
        hrefStore={'#'}
        descriptionVideo={'A primeira imagem de um buraco negro'}
        srcVideo={
          'https://www.youtube.com/embed/mXIgqR9kUEk?si=yVg7mN6Rfh1G-N18'
        }
      />
    </main>
  )
}
