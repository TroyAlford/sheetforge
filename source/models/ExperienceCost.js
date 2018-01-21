import { clone, getParent, types } from 'mobx-state-tree'

export default function ExperienceCost(
  calcFn,
  guardedActionNames = [],
  distanceToCharacter = 2
) {
  return types.model({
  }).views(self => ({
    get xpCost() { return calcFn(self) },
  })).actions((self) => {
    const getCharacter = () => {
      if (!distanceToCharacter) return self
      try {
        return getParent(self, distanceToCharacter)
      } catch (e) {
        console.warn(
          `Failed to find character ${distanceToCharacter} parents up from ExperienceCost model.`
        )
        return self
      }
    }
    const getAvailableXP = () => getCharacter().xp
    const adjustXP = (amount) => {
      const character = getCharacter()
      if (character && typeof character.setXP === 'function') {
        character.setXP(character.xp + amount)
      }
    }

    const guardedActions = guardedActionNames.reduce((map, name) => ({
      [`${name}Unguarded`]: self[name],
      [name]: (...args) => {
        const availableXP = getAvailableXP()

        const copy = clone(self)
        copy[`${name}Unguarded`](...args)

        const xpDelta = copy.xpCost - self.xpCost
        if (availableXP < xpDelta) return undefined
        adjustXP(-xpDelta)
        return self[`${name}Unguarded`](...args)
      },
    }), {})

    return {
      ...guardedActions,
      xpCostAfter(xpFn) {
        const cloned = clone(self)
        xpFn(cloned)
        return cloned.xpCost
      },
      xpCostDelta(xpFn) {
        return self.xpCostAfter(xpFn) - self.xpCost
      },
    }
  })
}
