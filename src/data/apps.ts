export interface App {
    name: string
    icon: string
    short: string
}

export type Apps = App[]

const apps = [
    {
        name: 'Microsoft Edge',
        icon: '/apps/edge.svg',
        short: 'Edge'
    },
    {
        name: 'File Explorer',
        icon: '/apps/file-explorer.png',
        short: 'Explorer'
    },
    {
        name: 'Window Terminal',
        icon: '/apps/windows-terminal.png',
        short: 'Terminal'
    }
]

export default apps