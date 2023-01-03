import clsx from 'clsx';
import { FC, useState } from 'react';
import { CenteredLayout } from '~/components';

// TODO is there a way to not write this twice? =\
//type ButtonType = 'fast' | 'quality' | 'cheap';
enum ButtonType {
    FAST = 'fast',
    QUALITY = 'quality',
    CHEAP = 'cheap'
}

const buttons: ButtonType[] = [ButtonType.CHEAP, ButtonType.QUALITY, ButtonType.FAST];
//const buttons: ButtonType[] = ["fast", "quality", "cheap"];

interface ButtonProps {
    button: ButtonType;
    selectedButton: ButtonType | null;
    setSelectedButton: (value: ButtonType) => void;
}

// TODO is it possible to improve this component's interface (props)?
const Button: FC<ButtonProps> = ({ button, selectedButton, setSelectedButton }) => {
    const style = button === selectedButton;
    return (
        <button
            key={button}
            onClick={() => setSelectedButton(button)}
            className={clsx(
                'h-10 px-5 flex items-center justify-center rounded transition-colors',
                style ? 'bg-green-400' : 'bg-gray-300',
            )}
        >
            {button}
        </button>
    );
};

export const Refactor1 = () => {
    const [selectedButton, setSelectedButton] = useState<ButtonType | null>(null);
    return (
        <CenteredLayout className='gap-4'>
            <div className='text-3xl'>See the code</div>
            <div className='grid grid-cols-3 gap-2 w-60'>
                {buttons.map((button) => (
                    <Button
                        key={button}
                        button={button}
                        selectedButton={selectedButton}
                        setSelectedButton={setSelectedButton}
                    />
                ))}
            </div>
        </CenteredLayout>
    );
};
