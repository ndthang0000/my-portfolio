import React from 'react';
import { FacebookLogo } from '@phosphor-icons/react/dist/ssr/FacebookLogo';
import { LinkedinLogo } from '@phosphor-icons/react/dist/ssr/LinkedinLogo';
import { EnvelopeSimple } from '@phosphor-icons/react/dist/ssr/EnvelopeSimple';
import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr/MagnifyingGlass';
import Link from 'next/link';

const Contact = () => {
  return (
    <div className="text-center mb-24">
      <div className="sm:text-4xl text-2xl flex justify-center gap-2 items-center">
        <MagnifyingGlass size={32} color="#9e61e9" stroke="10px" />
        <h2>FIND ME ON</h2>
      </div>
      <p>
        Feel free to <span className="text-[#9e61e9]">connect</span> with me
      </p>
      <div className="flex justify-center gap-6 mt-4">
        <div className="bg-primary p-1 rounded-full">
          <Link
            href={'https://www.facebook.com/profile.php?id=100009169116108'}
          >
            <FacebookLogo size={32} color="#7127BA" fill="white" />
          </Link>
        </div>
        <div className="bg-primary p-1 rounded-full">
          <Link
            href={'https://www.linkedin.com/in/thang-nguyen-duc-0b75071b5/'}
          >
            <LinkedinLogo size={32} color="#7127BA" fill="white" />
          </Link>
        </div>
        <div className="bg-primary p-1 rounded-full">
          <Link href="mailto:ndthang0000@gmail.com">
            <EnvelopeSimple size={32} color="#7127BA" fill="white" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
