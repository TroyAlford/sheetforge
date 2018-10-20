import { observer } from 'mobx-react'
import { onSnapshot } from 'mobx-state-tree'
import PropTypes from 'prop-types' // eslint-disable-line
import React from 'react'
import components from '@/components'
import ListOf from '@/components/List'
import models from '@/models'
import CharacterModel from '@/models/Character'
import getPathValue from '@/utilities/getPathValue'
import noop from '@/utilities/noop'
import modelPropType from '@/utilities/prop-types/model'
import './Sheet.scss'

@observer class Sheet extends React.Component {
  static defaultProps = {
    character: {},
    onChange: noop,
  }

  static propTypes = {
    character: modelPropType(CharacterModel),
    onChange: PropTypes.func,
  }

  state = { size: 'large' }

  constructor(props) {
    super(props)
    this.disposeOfSnapshotListener = onSnapshot(this.props.character, this.props.onChange)
    window.addEventListener('resize', this.handleWindowResize)
  }

  componentWillUnmount() { this.disposeOfSnapshotListener() }

  handleWindowResize = () => {
    let size = 'large'
    if (window.matchMedia('(min-width: 5in) and (max-width: 7.5in)').matches) {
      size = 'medium'
    } else if (window.matchMedia('(max-width: 5in)').matches) {
      size = 'small'
    }
    this.setState({ size })
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
    const { size } = this.state

    return (
      <div className={`sheet ${size}`}>
        {layout.map(this.renderComponent)}
      </div>
    )
  }
}

export default Sheet
