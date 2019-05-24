import React from 'react'
import components from '@/components'
import Conditions from '@/components/Conditions'
import Layout from '@/components/Layout'
import ListOf from '@/components/List'
import models from '@/models'
import debounce from '@/utilities/debounce'
import noop from '@/utilities/noop'
import './Sheet.scss'

class Sheet extends React.Component {
  static defaultProps = {
    character: {},
    layout: {},
    onChange: noop,
    onMount: noop,
  }

  state = { size: 'large' }

  handleWindowResize = debounce(() => {
    let size = 'large'
    if (window.matchMedia('(min-width: 5in) and (max-width: 7.5in)').matches) {
      size = 'medium'
    } else if (window.matchMedia('(max-width: 5in)').matches) {
      size = 'small'
    }
    if (size !== this.state.size) this.setState({ size })
  }, 250)

  componentDidMount() {
    this.handleWindowResize()
    window.addEventListener('resize', this.handleWindowResize)
    this.props.onMount(this)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize)
    this.onCharacterSnapshotDisposer()
    this.onLayoutSnapshotDisposer()
  }

  renderComponent = (parent, model, key) => {
    if (model.type) {
      const { title } = model
      const typename = model.type.toLowerCase()
      const List = ListOf(
        models[model.type],
        components[model.type],
        { className: `${typename}-list` }
      )
      const collection = this.props.character[`${typename}s`]
      return (
        <List {...{ key, layout: model, title }} collection={collection} columns={model.columns} />
      )
    }

    return (
      <Layout key={model.hash} model={model} parentColumns={parent.columns}>
        {model.children.map((child, i) => this.renderComponent(model, child, i))}
      </Layout>
    )
  }

  render() {
    const { character, layout } = this.props
    const { size } = this.state

    return (
      <div className={`sheetforge sheet ${size}`}>
        <Conditions model={character} />
        {layout.children.map(this.renderComponent.bind(null, layout))}
      </div>
    )
  }
}

export default Sheet
