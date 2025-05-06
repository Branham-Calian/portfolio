import React from 'react';
import Image from 'next/image';
import GithubLogo from '@/public/images/svg/Github-Logo.svg';
import LinkedinLogo from '@/public/images/svg/LinkedIn-Logo.svg';
import Gmail from '@/public/images/svg/gmail.svg';
import DiscordLogo from '@/public/images/svg/discord.svg';
import TelegramLogo from '@/public/images/svg/telegram.svg';
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-default px-4 py-8 text-white">
      <div className="mx-auto max-w-6xl">

        <div className="mt-10">
          <div className="flex flex-wrap justify-center gap-6">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="grid items-center"
            >
              <Image
                src={Gmail}
                alt="Mail Logo"
                width={40}
                height={40}
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="grid items-center"
            >
              <Image
                src={GithubLogo}
                alt="Github Logo"
                width={40}
                height={40}
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="grid items-center"
            >
              <Image
                src={DiscordLogo}
                alt="Discord Logo"
                width={40}
                height={40}
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="grid items-center"
            >
              <Image
                src={TelegramLogo}
                alt="Telegram Logo"
                width={40}
                height={40}
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="grid items-center"
            >
              <Image
                src={LinkedinLogo}
                alt="Linkedin Logo"
                width={40}
                height={40}
              />
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-sm">
          © {currentYear} Benjamin Wilson, All rights reserved
        </p>
      </div>
    </footer>
  );
}
