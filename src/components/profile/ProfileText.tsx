interface ProfileTextProps {
    t: {
        name: string;
        phone: string;
    }
}

export const ProfileText = ({ t }: ProfileTextProps) => {
    const { name, phone } = t;
    return (
        <>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">{name}</h2>
            <div className={"flex flex-row justify-evenly"}>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">joseleandrogullo@gmail.com</p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{phone}: +54 9 3489 594918</p>
            </div>
        </>
    )
}
