import React from 'react';
import clsx from 'clsx';
import { useTheme } from 'next-themes';
import { BiMoon, BiSun } from 'react-icons/bi';
import { ImGithub } from 'react-icons/im';
import { cn } from '#/lib/utils';
import Button from './Button/Button';
import ButtonLink from './Button/ButtonLink';

export default function Header() {
  const { resolvedTheme, setTheme } = useTheme();

  const handleChangeTheme = () => {
    return setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full bg-white/10 p-0.5',
        'shadow-sm shadow-gray-50 backdrop-blur-md',
        'dark:bg-gray-600/10 dark:shadow-gray-500'
      )}
    >
      <div
        className={clsx('flex items-center justify-between', 'mx-auto h-14 max-w-3xl px-2 md:px-1')}
      >
        <h5 className="font-bold text-black dark:text-white">QR Generator</h5>
        <div className="flex items-center gap-4">
          <ButtonLink
            href="https://github.com/evriyanaindrasaputra"
            className={cn(
              'text-darkpurple-800 hover:bg-primary-200',
              'dark:text-darkpurple-50 dark:hover:bg-secondary-700',
              'rounded-full p-2'
            )}
          >
            <ImGithub size={24} />
          </ButtonLink>
          <Button
            intent="primary"
            className={cn(
              'dark:border-white dark:text-white dark:hover:bg-gray-500',
              'hover:border-black hover:bg-gray-200',
              'border-black p-2 text-black',
              'rounded-full transition hover:rotate-45'
            )}
            onClick={() => handleChangeTheme()}
          >
            {resolvedTheme === 'light' ? <BiMoon size={20} /> : <BiSun size={20} />}
          </Button>
        </div>
      </div>
    </header>
  );
}
