export default Model => (props, propName, componentName) => (
  (props[propName] && typeof Model.is(props[propName]))
    ? undefined
    : new Error(`Invalid prop ${propName} supplied to ${componentName}. Validation failed.`)
)
