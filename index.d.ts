
type load = (path: string) => void

function loadFunc(path: string = "./env"): void

export = loadFunc
export default loadFunc