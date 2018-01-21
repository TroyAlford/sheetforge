export default class DiceRoller {
  static defaultConfig = {
    explodeOn: [],
    multiExplode: false,
    dieSides: 6,
  }

  constructor(config = {}) {
    this.options = Object.assign({}, DiceRoller.defaultConfig, config)
  }

  rollDie = (sides = this.options.dieSides) => (
    1 + Math.floor(Math.random() * Math.floor(sides))
  )

  vsThreshold = (howMany, threshold) => {
    const { explodeOn, multiExplode } = this.options
    const rolls = [...new Array(howMany)].map(() => this.rollDie())
    let explosionCount = rolls.filter(r => explodeOn.includes(r)).length
    while (explosionCount) {
      const roll = this.rollDie()
      if (!explodeOn.includes(roll) || !multiExplode) {
        explosionCount-- // eslint-disable-line no-plusplus
      }
      rolls.push(roll)
    }

    const successes = rolls.filter(r => r >= threshold).length
    const failures = rolls.filter(r => r <= 1).length
    const isBotch = successes === 0 && failures > 0

    return {
      failures,
      isBotch,
      rolls,
      successes,
    }
  }
}
