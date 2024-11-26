
interface LayoutProps {
    children: React.ReactNode,
    isDarkMode: boolean
}

export const Layout = ({ children, isDarkMode }: LayoutProps) => {
    return (
        <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
            <main className="flex-1">{children}</main>
        </div>
    )
}