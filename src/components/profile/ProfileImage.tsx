interface ProfileImageProps {
    MyImage: string
}

export const ProfileImage = ({MyImage}: ProfileImageProps) => {
    return (
        <>
            <img
              className="mx-auto h-32 w-32 rounded-full border-2 border-indigo-600 dark:border-indigo-400 shadow-lg"
              src={MyImage}
              alt="Foto de perfil"
            />
        </>
    )
}