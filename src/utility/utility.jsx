import { gameCategories, animatedImages } from '../data/pokemon'

function findIntersection(categories) {
  const firstCategory = gameCategories[categories[0]]
  const secondCategory = gameCategories[categories[1]]
  return firstCategory.filter((pokemon) => secondCategory.includes(pokemon))
}

export function checkAnswer(categories, answer) {
  return findIntersection(categories).includes(answer.toUpperCase())
}

export function capitalizeFirstLetter(word) {
  if (word.includes(' ')) {
    word = word.split(' ')
    for (let i = 0; i < word.length; i++) {
      word[i] = word[i][0].toUpperCase() + word[i].substring(1).toLowerCase()
    }
    return word.join(' ')
  }

  if (word.includes('-')) {
    word = word.split('-')
    for (let i = 0; i < word.length; i++) {
      word[i] = word[i][0].toUpperCase() + word[i].substring(1).toLowerCase()
    }
    return word.join('-')
  }

  return word[0].toUpperCase() + word.substring(1).toLowerCase()
}

export function getImage(pokemon) {
  let formattedName = pokemon
    .toLowerCase()
    .replace("'", '')
    .replace(' ', '')
    .replace('-', '')
    .replace('.', '')
    .replace(':', '')

  if (formattedName.startsWith('nidoran')) {
    formattedName = 'nidoranf'
  }

  if (animatedImages.includes(formattedName.toUpperCase())) {
    return `https://play.pokemonshowdown.com/sprites/gen5ani/${formattedName}.gif`
  }
  return `https://play.pokemonshowdown.com/sprites/gen5/${formattedName}.png`
}

export function addToHistory(
  currentHistory,
  pokemon,
  categories,
  correct,
  skipped
) {
  return [
    {
      pokemon: pokemon,
      categories: categories,
      img: getImage(pokemon),
      correct: correct,
      skipped: skipped,
    },
    ...currentHistory,
  ]
}
