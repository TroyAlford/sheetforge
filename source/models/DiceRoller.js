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

  rollMany = (howMany, sides = this.options.dieSides) => (
    [...new Array(howMany)].map(() => this.rollDie(sides))
  )

  rollSum = (howMany, sides = this.options.dieSides) => (
    this.rollMany(howMany, sides).reduce((sum, roll) => sum + roll, 0)
  )

  rollVsThreshold = (howMany, threshold) => {
    const { explodeOn, multiExplode } = this.options
    const rolls = this.rollMany(howMany)
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
