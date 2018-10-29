import { observer } from 'mobx-react'
import { onSnapshot } from 'mobx-state-tree'
import React from 'react'
import components from '@/components'
import Conditions from '@/components/Conditions'
import Layout from '@/components/Layout'
import ListOf from '@/components/List'
import models from '@/models'
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
    this.onCharacterSnapshotDisposer = onSnapshot(this.props.character, (snapshot) => {
      this.props.onChange(snapshot, this.props.layout.toJSON(), this)
      this.forceUpdate()
    })
    this.onLayoutSnapshotDisposer = onSnapshot(this.props.layout, (snapshot) => {
      this.props.onChange(this.props.character.toJSON(), snapshot, this)
      this.forceUpdate()
    })
    window.addEventListener('resize', this.handleWindowResize)
  }
  componentDidMount() {
    this.handleWindowResize()
    this.props.onMount(this)
  }
  componentWillUnmount() {
    this.onCharacterSnapshotDisposer()
    this.onLayoutSnapshotDisposer()
  }

  handleWindowResize = () => {
    let size = 'large'
    if (window.matchMedia('(min-width: 5in) and (max-width: 7.5in)').matches) {
      size = 'medium'
    } else if (window.matchMedia('(max-width: 5in)').matches) {
      size = 'small'
    }
    if (size !== this.state.size) this.setState({ size })
  }

  renderComponent = (model, key) => {
    if (model.type) {
      const { title } = model
      const typename = model.type.toLowerCase()
      const List = ListOf(
        models[model.type],
        components[model.type],
        { className: `${typename}-list` }
      )
      const collection = this.props.character[`${typename}s`]

      return <List collection={collection} {...{ key, title }} />
    }

    return (
      <Layout key={model.hash} model={model}>
        {model.children.map(this.renderComponent)}
      </Layout>
    )
  }

  render() {
    const { character, layout } = this.props
    const { size } = this.state

    return (
      <div className={`sheetforge sheet ${size}`}>
        <Conditions model={character} />
        {layout.children.map(this.renderComponent)}
      </div>
    )
  }
}

export default Sheet
