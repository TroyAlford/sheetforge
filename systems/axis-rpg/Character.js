import Character from '../../source/models/Character'

const DEFAULT = {
  layer: {
    active: true,
    attributes: {
      Accuracy: { val: 'round((Acuity + Focus + Intuition) / 3, 0)' },
      Acuity: { val: 0 },
      Agility: { val: 0 },
      Body: { val: 'round((Agility + Fitness + Strength) / 3, 0)' },
      Confidence: { val: 0 },
      DeathBlow: { val: 'DeepWound * 2' },
      DeepWound: { val: 'LightWound * 2' },
      Devotion: { val: 0 },
      Fitness: { val: 0 },
      Focus: { val: 0 },
      Intellect: { val: 0 },
      Intuition: { val: 0 },
      LightWound: { val: 'Size + Strength + Fitness + Armor + NaturalArmor' },
      Might: { val: 'round((Strength + Fitness) / 2, 0) + size' },
      Mind: { val: 'round((Acuity + Agility + Intuition) / 3, 0)' },
      Potency: { val: 'round((Confidence + Intellect + Strength) / 3, 0)' },
      Reflex: { val: 'round((Acuity + Agility + Intuition) / 3, 0)' },
      Resilience: { val: 'round((Devotion + Fitness + Focus) / 3, 0)' },
      Size: { val: 0 },
      Spirit: { val: 'round((Confidence + Devotion + Intuition) / 3, 0)' },
      Strength: { val: 0 },
      Toughness: { val: 'round((Strength + Fitness + Size) / 3, 0)' },
    },
  },
  attribute: {
    max: 10,
    min: -10,
    value: -1,
  },
}

export default class Mortal extends Character {
  constructor({ effects, equipment, layers }, { attribute = DEFAULT.attribute }) {
    super({ effects, equipment }, { attribute })
    this.layers = [this.layerReducer(DEFAULT.layer, layers || [])]
  }
}
