
import React from 'react'
import { observer } from 'mobx-react'
import './PortraitSection.scss'

const DEFAULT_PORTRAIT_URL = '//via.placeholder.com/300x400/eeeeee?text=3x4+aspect+ratio'

const buildUrl = url => `url(${url || DEFAULT_PORTRAIT_URL})`
const PortraitSection = ({ url }) => (
  <div className="portrait section">
    <header>Portrait</header>
    <div className="image" style={{ backgroundImage: buildUrl(url) }} />
  </div>
)

PortraitSection.displayName = 'PortraitSection'
export default observer(PortraitSection)
