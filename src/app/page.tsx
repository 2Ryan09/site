import Image from "next/image";
import Link from "next/link";
import { Orbitron } from 'next/font/google'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const orbitron = Orbitron({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="flex flex-col justify-center items-center p-2">
        <Image
          className="rounded-full"
          src="https://avatars.githubusercontent.com/u/22386684?v=4"
          alt="Photo of Ryan Waldheim"
          width={300}
          height={300}
        />
        <h1 className={orbitron.className} style={{fontSize: '3rem', fontWeight: 600}}>Ryan Allyn Waldheim</h1>
      </div>
      <div className="flex flex-col justify-center text-center p-2">
        <p>Battery engineer transitioning into web development with a passion for design and accessibility.</p>
      </div>
      <div className="flex space-x-4 p-2">
        <Link href="mailto:ryan@waldhe.im">
          <FontAwesomeIcon icon={faEnvelope} size="2x"/>
        </Link>
        <Link href="https://github.com/2ryan09">
          <FontAwesomeIcon icon={faGithub} size="2x"/>
        </Link>
        <Link href="https://www.linkedin.com/in/ryanawaldheim/">
          <FontAwesomeIcon icon={faLinkedin} size="2x"/>
        </Link>
      </div>
    </main>
  );
}
