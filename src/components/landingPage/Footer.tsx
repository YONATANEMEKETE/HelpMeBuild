import React from 'react';
import Container from '../Container';
import { Separator } from '../ui/separator';
import Link from 'next/link';
import Image from 'next/image';
import { github, linkedin, telegram } from '@/constant/icons';

const Footer = () => {
  return (
    <Container className="pt-20 px-10 flex items-center flex-col gap-y-2">
      <p className="text-xs sm:text-sm text-mytext font-body font-extrabold">
        YONATANE MEKETE
      </p>
      <div className="flex items-center gap-x-2">
        <Link
          href={'https://github.com/YONATANEMEKETE'}
          target="_blank"
          className="cursor-pointer"
        >
          <Image src={github} alt="github link" width={28} height={28} />
        </Link>
        <Link
          href={'https://www.linkedin.com/in/yonatanemekete/'}
          target="_blank"
          className="cursor-pointer"
        >
          <Image src={linkedin} alt="Linkedin link" width={27} height={27} />
        </Link>
        <Link
          href={'https://t.me/yonatanemekete'}
          target="_blank"
          className="cursor-pointer"
        >
          <Image src={telegram} alt="telegram link" width={28} height={28} />
        </Link>
      </div>
    </Container>
  );
};

export default Footer;
