const PATH_SPLITTER = /([a-z0-9-_]+)(?![["'\].])*/ig

export default path => path.match(PATH_SPLITTER)
