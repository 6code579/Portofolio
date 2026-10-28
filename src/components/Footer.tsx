import { Github, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { navItems } from '../data/content';
import { Reveal } from './Reveal';
import TLink from './TLink';

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/LucaneTech', icon: Github },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/franciscomouanda579', icon: Linkedin },
  { name: 'Instagram', url: 'https://www.instagram.com/lucane.tech/', icon: Instagram },
  { name: 'Email', url: 'mailto:profrancisco579@gmail.com', icon: Mail },
];

export default function Footer() {
  return (
    <footer className="relative border-t hairline bg-deep pb-8 pt-20 md:pt-28">
      <div className="container-x">
        <Reveal>
          <a
            href="mailto:profrancisco579@gmail.com"
            data-cursor="link"
            className="block break-words max-md:text-center text-[clamp(1.05rem,6.2vw,6rem)] leading-[1.05] tracking-tight text-secondary transition-colors duration-500 hover:text-primary"
          >
            profrancisco579@gmail.com
          </a>
        </Reveal>

        <div className="mt-16 grid gap-12 max-md:text-center md:mt-24 md:grid-cols-3">
          <Reveal className="space-y-5">
            <h3 className="eyebrow">Contact</h3>
            <ul className="space-y-3 text-light/80">
              <li className="flex items-center gap-3 max-md:justify-center">
                <Mail className="h-4 w-4 text-primary" />
                <span>profrancisco579@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 max-md:justify-center">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Maroc</span>
              </li>
              <li className="flex items-center gap-3 max-md:justify-center">
                <Phone className="h-4 w-4 text-primary" />
                <span>+212 0781343642</span>
              </li>
            </ul>
          </Reveal>

          <Reveal className="space-y-5" delay={0.08}>
            <h3 className="eyebrow">Navigation</h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.path}>
                  <TLink to={item.path} className="text-light/80 transition-colors hover:text-primary">
                    {item.label}
                  </TLink>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="space-y-5" delay={0.16}>
            <h3 className="eyebrow">Suivez-moi</h3>
            <ul className="flex gap-3 max-md:justify-center">
              {socialLinks.map(({ name, url, icon: Icon }) => (
                <li key={name}>
                  <a
                    href={url}
                    target={url.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="flex h-12 w-12 items-center justify-center rounded-md border border-secondary/25 text-light transition-colors duration-300 hover:border-primary hover:bg-primary hover:text-bg"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <p className="mt-20 border-t hairline pt-8 text-center text-sm text-light/60">
          &copy; {new Date().getFullYear()} Portfolio. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
