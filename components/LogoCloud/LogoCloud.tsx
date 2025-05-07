import Image from 'next/image';
import PythonLogo from '@/public/images/svg/Python-Logo.svg';
import TailwindCSSLogo from '@/public/images/svg/Tailwind-Logo.svg';
import ReactLogo from '@/public/images/svg/react-logo.svg';
import TypescriptLogo from '@/public/images/svg/TS-Logo.svg';
import FigmaLogo from '@/public/images/svg/figma-logo.svg';
import VercelLogo from '@/public/images/svg/Vercel-Logo.svg';
import EthereumLogo from '@/public/images/svg/ethereum-logo.svg';
import SolidityLogo from '@/public/images/svg/solidity-logo.svg';
import EthersJSLogo from '@/public/images/svg/ethersjs-logo.svg';
import WagmiLogo from '@/public/images/svg/wagmi-logo.svg';
import RainbowKitLogo from '@/public/images/svg/rainbowkit-logo.svg';
import OpenAILogo from '@/public/images/svg/openai-logo.svg';
import SectionHeading from '../SectionHeading';
export const logos = [
  {
    src: EthereumLogo,
    alt: 'Ethereum Logo',
    name: 'Ethereum',
    width: 200,
    height: 200,
  },
  {
    src: SolidityLogo,
    alt: 'Solidity Logo',
    name: 'Solidity',
    width: 200,
    height: 200,
  },
  {
    src: EthersJSLogo,
    alt: 'Ethers.js Logo',
    name: 'Ethers.js',
    width: 200,
    height: 200,
  },
  { src: WagmiLogo, alt: 'Wagmi Logo', name: 'Wagmi', width: 200, height: 200 },
  {
    src: RainbowKitLogo,
    alt: 'RainbowKit Logo',
    name: 'RainbowKit',
    width: 200,
    height: 200,
  },
  {
    src: OpenAILogo,
    alt: 'OpenAI Logo',
    name: 'AI/ML',
    width: 200,
    height: 200,
  },
  { src: ReactLogo, alt: 'React Logo', name: 'React', width: 200, height: 200 },
  {
    src: VercelLogo,
    alt: 'Vercel Logo',
    name: 'Next.js',
    width: 200,
    height: 200,
  },
  {
    src: TypescriptLogo,
    alt: 'TypeScript Logo',
    name: 'TypeScript',
    width: 200,
    height: 200,
  },
  {
    src: TailwindCSSLogo,
    alt: 'Tailwind CSS Logo',
    name: 'Tailwind CSS',
    width: 200,
    height: 200,
  },
  {
    src: PythonLogo,
    alt: 'Python Logo',
    name: 'Python',
    width: 200,
    height: 200,
  },
  { src: FigmaLogo, alt: 'Figma Logo', name: 'Figma', width: 23, height: 23 },
];

interface LogoProps {
  src: string | string[];
  alt: string | string[];
  name: string;
  width?: number | number[];
  height?: number | number[];
}

const Logo = ({ src, alt, name, width = 200, height = 200 }: LogoProps) => (
  <div className="flex items-center gap-2 self-center lg:items-center lg:gap-2">
    {Array.isArray(src) ? (
      <div className="flex items-center gap-2">
        <div className="flex w-[60px] items-center justify-center">
          <Image
            src={src[0]}
            alt={Array.isArray(alt) ? alt[0] : alt}
            width={Array.isArray(width) ? width[0] : width}
            height={Array.isArray(height) ? height[0] : height}
            className="scale-1200 invert [&>path]:fill-white"
          />
        </div>
        <Image
          src={src[1]}
          alt={Array.isArray(alt) ? alt[1] : alt}
          width={Array.isArray(width) ? width[1] : width}
          height={Array.isArray(height) ? height[1] : height}
        />
      </div>
    ) : (
      <div className="flex w-[60px] items-center justify-center">
        <Image
          src={src}
          alt={alt as string}
          width={width as number}
          height={height as number}
        />
      </div>
    )}
    {name && <div className="text-sm font-semibold lg:text-base">{name}</div>}
  </div>
);

export const LogoList = ({ startIndex = 0 }: { startIndex?: number }) => (
  <div className="flex items-center">
    {Array.from({ length: 2 }, (_, i) =>
      logos.map((logo, index) => (
        <div
          key={`logo-${startIndex}-${i}-${index}`}
          className="inline-flex items-center px-6"
        >
          <Logo {...logo} />
        </div>
      )),
    ).flat()}
  </div>
);

export default function LogoCloud() {
  return (
    <div id="skills" className="lg:mt-22 relative z-40 mx-auto mb-[-75px] mt-[200px] flex flex-col gap-3 text-white lg:mb-0 lg:max-w-[1080px] lg:gap-6">
      <SectionHeading
        heading="Signature Skills"
        subheading="A collection of my signature skills and techs in blockchain"
      />

      <div
        className="relative flex w-full overflow-hidden"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 15%, black 85%, transparent 200%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 15%, black 85%, transparent 200%)',
        }}
      >
        <div className="flex animate-marquee-scroll whitespace-nowrap py-6">
          {Array.from({ length: 2 }, (_, i) => (
            <LogoList key={`list-1-${i}`} startIndex={i} />
          ))}
        </div>
        <div
          className="flex animate-marquee-scroll whitespace-nowrap py-6"
          style={{ animationDelay: '-20s' }}
          aria-hidden="true"
        >
          {Array.from({ length: 2 }, (_, i) => (
            <LogoList key={`list-2-${i}`} startIndex={i + 2} />
          ))}
        </div>
      </div>

      <p className="mx-auto w-full max-w-[2200px] text-center text-sm opacity-60 lg:max-w-none">
        Staying ahead of the curve and surfing the waves of innovation
      </p>
    </div>
  );
}
