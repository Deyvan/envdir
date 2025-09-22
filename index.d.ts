function loadFunc(path: string = "./env", settings: {dontInjectEnv: boolean = false}): Readonly<Record<string, string | undefined>>
export = loadFunc
export default loadFunc