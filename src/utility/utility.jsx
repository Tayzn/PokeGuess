import { gameCategories } from '../data/pokemon'

const findIntersection = (categories) => {
  const firstCategory = gameCategories[categories[0]]
  const secondCategory = gameCategories[categories[1]]
  return firstCategory.filter((pokemon) => secondCategory.includes(pokemon))
}

export const checkAnswer = (categories, answer) => {
  return findIntersection(categories).includes(answer.toUpperCase())
}
