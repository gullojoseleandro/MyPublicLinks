
import { ProfileImage } from './ProfileImage'
import { ProfileText } from './ProfileText'

interface ProfileContainerProps {
    t: {
      name: string;
      portfolio: string;
      resume: string;
      darkMode: string;
      lightMode: string;
      changeLanguage: string;
      phone: string;
    };
    MyImage: string;
  }

export const ProfileContainer = ({ t, MyImage }: ProfileContainerProps) => {
    return (
        <>
            <div className="text-center">
                <ProfileImage MyImage={MyImage} />
                <ProfileText t={t} />
            </div>
        </>
    )
}

