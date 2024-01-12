import React from 'react'
import { Image } from 'react-bootstrap'

import fire from '../assets/images/categories/fire.png'
import water from '../assets/images/categories/water.png'
import grass from '../assets/images/categories/grass.png'
import electric from '../assets/images/categories/electric.png'
import normal from '../assets/images/categories/normal.png'
import bug from '../assets/images/categories/bug.png'
import dark from '../assets/images/categories/dark.png'
import dragon from '../assets/images/categories/dragon.png'
import fairy from '../assets/images/categories/fairy.png'
import fighting from '../assets/images/categories/fighting.png'
import flying from '../assets/images/categories/flying.png'
import ghost from '../assets/images/categories/ghost.png'
import ground from '../assets/images/categories/ground.png'
import ice from '../assets/images/categories/ice.png'
import poison from '../assets/images/categories/poison.png'
import psychic from '../assets/images/categories/psychic.png'
import rock from '../assets/images/categories/rock.png'
import steel from '../assets/images/categories/steel.png'
import kanto from '../assets/images/categories/kanto.png'
import johto from '../assets/images/categories/johto.png'
import hoenn from '../assets/images/categories/hoenn.png'
import sinnoh from '../assets/images/categories/sinnoh.png'
import unova from '../assets/images/categories/unova.png'
import kalos from '../assets/images/categories/kalos.png'
import alola from '../assets/images/categories/alola.png'
import galar from '../assets/images/categories/galar.png'
import paldea from '../assets/images/categories/paldea.png'
import legendary from '../assets/images/categories/legendary.png'
import baby from '../assets/images/categories/baby.png'
import mega from '../assets/images/categories/mega.png'
import mythical from '../assets/images/categories/mythical.png'
import ultrabeast from '../assets/images/categories/ultrabeast.png'
import monotype from '../assets/images/categories/monotype.png'

const labels = {
  Fire: fire,
  Water: water,
  Grass: grass,
  Electric: electric,
  Normal: normal,
  Bug: bug,
  Dark: dark,
  Dragon: dragon,
  Fairy: fairy,
  Fighting: fighting,
  Flying: flying,
  Ghost: ghost,
  Ground: ground,
  Ice: ice,
  Poison: poison,
  Psychic: psychic,
  Rock: rock,
  Steel: steel,
  Kanto: kanto,
  Johto: johto,
  Hoenn: hoenn,
  Sinnoh: sinnoh,
  Unova: unova,
  Kalos: kalos,
  Alola: alola,
  Galar: galar,
  Paldea: paldea,
  Legendary: legendary,
  Baby: baby,
  Mega: mega,
  Mythical: mythical,
  Ultrabeast: ultrabeast,
  Monotype: monotype,
}

const CategoryLabel = ({ label }) => {
  return (
    <Image
      fluid
      src={labels[label]}
      alt={label}
      className='m-1'
    />
  )
}

export default CategoryLabel
