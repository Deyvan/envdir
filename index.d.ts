declare function loadFunc(path: string, settings?: {dontInjectEnv: boolean}): Readonly<Record<string, string | undefined>>
export default loadFunc