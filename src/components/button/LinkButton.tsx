
interface LinkButtonProps {
    t: {
        portfolio: string;
        resume: string;
    },
    links: { name: string; url: string; icon: any }[]
}

export const LinkButton = ({ t, links }: LinkButtonProps) => {
    return (
        <div className="mt-8 space-y-4">
            {links.map((link: { name: string; url: string; icon: any }) => (
                <a
                    key={link.name}
                    href={link.url}
                    className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition duration-150 ease-in-out"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <link.icon className="mr-2" />
                    {link.name === 'Portfolio' ? t.portfolio : link.name === 'Curriculum' ? t.resume : link.name}
                </a>
            ))}
        </div>
    )
}