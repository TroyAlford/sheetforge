export const sum = (...values) => values.reduce((all, one) => all + one, 0)
export const average = (...values) => Math.round(sum(...values) / values.length)
