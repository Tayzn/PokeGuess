import { gameCategories, animatedImages } from '../data/pokemon'

function findIntersection(categories) {
  const firstCategory = gameCategories[categories[0]]
  const secondCategory = gameCategories[categories[1]]
  return firstCategory.filter((pokemon) => secondCategory.includes(pokemon))
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}

export function smartGenerateCategories(disabledCategories) {
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
      if (findIntersection(candidateCategories).length >= 1) {
        return candidateCategories
      }

      validSecondaries.splice(randomSecondaryIndex, 1)
    }
  }

  return []
}

export function generateCategories() {
  const categories = []
  const categoryOptions = Object.keys(gameCategories)

  const randomIndex = Math.floor(Math.random() * categoryOptions.length)
  categories.push(categoryOptions[randomIndex])
  categoryOptions.splice(randomIndex, 1)

  categories.push(
    categoryOptions[Math.floor(Math.random() * categoryOptions.length)]
  )

  return categories
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
