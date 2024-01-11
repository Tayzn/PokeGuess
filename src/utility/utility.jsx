import { gameCategories, animatedImages, pokemon } from '../data/pokemon'

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}

function categoriesToPokemon(categories) {
  return categories.map((category) => gameCategories[category])
}

function findIntersection(categories) {
  const pokemon = categoriesToPokemon(categories)
  return pokemon.reduce((a, b) => a.filter((c) => b.includes(c)))
}

function getSolutionSet(categories, disabledRegions) {
  const naiveSolution = findIntersection(categories)
  const disabledPokemon = categoriesToPokemon(disabledRegions).flat()
  return naiveSolution.filter((pokemon) => !disabledPokemon.includes(pokemon))
}

export function checkAnswer(categories, answer, disabledRegions) {
  const formattedAnswer = answer.toUpperCase()

  if (!pokemon.includes(formattedAnswer)) {
    return 'INVALID'
  } else if (
    categoriesToPokemon(disabledRegions).flat().includes(formattedAnswer)
  ) {
    return 'NOT_SELECTED'
  }

  return getSolutionSet(categories, disabledRegions).includes(formattedAnswer)
}

export function smartGenerateCategories(disabledCategories, disabledRegions) {
  let validCategories = Object.keys(gameCategories)
  validCategories = validCategories.filter(
    (item) => !disabledCategories.includes(item)
  )

  while (validCategories.length > 0) {
    const randomPrimaryIndex = getRandomIndex(validCategories)
    const firstCategory = validCategories[randomPrimaryIndex]

    validCategories.splice(randomPrimaryIndex, 1)
    let validSecondaries = [...validCategories]

    while (validSecondaries.length > 0) {
      const randomSecondaryIndex = getRandomIndex(validSecondaries)
      const secondCategory = validSecondaries[randomSecondaryIndex]

      const candidateCategories = [firstCategory, secondCategory]
      if (getSolutionSet(candidateCategories, disabledRegions).length > 0) {
        return candidateCategories
      }

      validSecondaries.splice(randomSecondaryIndex, 1)
    }
  }

  return []
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

export function getImage(name) {
  if (!pokemon.includes(name.toUpperCase())) {
    return 'https://play.pokemonshowdown.com/sprites/gen5ani/unown-question.gif'
  }

  let formattedName = name
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
