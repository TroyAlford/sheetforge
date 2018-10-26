import { observer } from 'mobx-react'
import { onSnapshot } from 'mobx-state-tree'
import React from 'react'
import components from '@/components'
import Conditions from '@/components/Conditions'
import ListOf from '@/components/List'
import models from '@/models'
import getPathValue from '@/utilities/getPathValue'
import noop from '@/utilities/noop'
import './Sheet.scss'

@observer class Sheet extends React.Component {
  static defaultProps = {
    character: {},
    onChange: noop,
    onMount: noop,
  }

  state = { size: 'large' }

  constructor(props) {
    super(props)
    this.disposeOfSnapshotListener = onSnapshot(this.props.character, (snapshot) => {
      this.props.onChange(snapshot, this.props.layout, this)
    })
    window.addEventListener('resize', this.handleWindowResize)
  }

  componentDidMount() {
    this.handleWindowResize()
    this.props.onMount(this)
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
    const Component = components[type]
    const data = getPathValue(this.props.character, path)
    Object.assign(props, { size: this.state.size })

    if (list) {
      const ModelType = models[type]

      const List = ListOf(ModelType, Component, {
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
    const { character, layout = [] } = this.props
    const { size } = this.state

    return (
      <div className={`sheetforge sheet ${size}`}>
        <Conditions model={character} />
        {layout.map(this.renderComponent)}
      </div>
    )
  }
}

export default Sheet
