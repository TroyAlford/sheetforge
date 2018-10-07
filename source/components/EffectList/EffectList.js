import Effect from '@/components/Effect'
import ListOf from '@/components/List'
import EffectModel from '@/models/Effect'

export default ListOf(EffectModel, Effect, {
  addButtonText: 'Add Effect',
  className: 'effect',
})
