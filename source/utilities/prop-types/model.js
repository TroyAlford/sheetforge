export default modelType => (props, propName, componentName) => (
  (props[propName] && typeof props[propName].is === 'function' && props[propName].is(modelType))
    ? undefined
    : new Error(`Invalid prop ${propName} supplied to ${componentName}. Validation failed.`)
)
