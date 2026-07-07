import { Mail, Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './brand-icons'

const socials = [
{ icon: GithubIcon, label: 'GitHub', href: 'https://github.com/Suvrot' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: '#' },
  { icon: Send, label: 'Telegram', href: '#' },
  { icon: Mail, label: 'Email', href: 'mailto:supermax44676@gmail.com' },
]

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-muted-foreground">
         © {new Date().getFullYear()} Savely Shulgin. Все права защищены.
        </p>
        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <social.icon size={18} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
