import { observer } from 'mobx-react'
import React from 'react'
import components from '@/components'
import ListOf from '@/components/List'
import models from '@/models'
import CharacterModel from '@/models/Character'
import getPathValue from '@/utilities/getPathValue'
import modelPropType from '@/utilities/prop-types/model'
import './Sheet.scss'

@observer class Sheet extends React.Component {
  static defaultProps = {
    character: {},
  }

  static propTypes = {
    character: modelPropType(CharacterModel),
  }

  renderComponent = ({ children, list, lookup, path, type, ...props }, key) => {
    const { character } = this.props
    const Component = components[type]
    const data = getPathValue(character, path)

    if (list) {
      const ModelType = models[type]

      const List = ListOf(ModelType, Component, {
        addButtonText: `Add ${type}`,
        className: `${type.toLowerCase()}-list`,
      })
      return <List key={key} collection={data} {...props} />
    }

    if (lookup) return <Component key={key} model={data.findById(lookup)} {...props} />
    if (data) return <Component key={key} model={data} {...props} />

    return (
      <Component key={key} {...props}>
        {children.map(this.renderComponent)}
      </Component>
    )
  }

  render() {
    const { layout = [] } = this.props

    return (
      <div className="sheet">
        {layout.map(this.renderComponent)}
      </div>
    )
  }
}

export default Sheet
