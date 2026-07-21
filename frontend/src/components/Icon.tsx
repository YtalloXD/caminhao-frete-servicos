import type { ReactNode } from 'react'

const icons: Record<string, ReactNode> = {
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  close: <><path d="m6 6 12 12M18 6 6 18" /></>,
  arrow: <><path d="M5 12h14m-5-5 5 5-5 5" /></>,
  'map-pin': <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  route: <><circle cx="6" cy="18" r="2" /><circle cx="18" cy="6" r="2" /><path d="M8 18h3a2 2 0 0 0 2-2V8a2 2 0 0 1 2-2h1" /></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></>,
  package: <><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" /><path d="m4.5 7.5 7.5 4 7.5-4M12 11.5V21" /></>,
  truck: <><path d="M3 6h11v11H3zM14 10h4l3 3v4h-7z" /><circle cx="7" cy="18" r="2" /><circle cx="18" cy="18" r="2" /></>,
  card: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18M7 15h3" /></>,
  message: <><path d="M21 15a3 3 0 0 1-3 3H8l-5 3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3Z" /><path d="M8 9h8M8 13h5" /></>,
  history: <><path d="M3 12a9 9 0 1 0 3-6.7L3 8" /><path d="M3 3v5h5M12 7v5l3 2" /></>,
  star: <><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z" /></>,
  headset: <><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><path d="M4 14a2 2 0 0 1 2-2h2v7H6a2 2 0 0 1-2-2ZM20 14a2 2 0 0 0-2-2h-2v7h2a2 2 0 0 0 2-2ZM16 19c0 1.1-.9 2-2 2h-2" /></>,
  'user-check': <><circle cx="9" cy="8" r="4" /><path d="M3 21v-2a6 6 0 0 1 12 0v2M16 11l2 2 4-4" /></>,
  navigation: <><path d="m4 4 17 7-7 3-3 7L4 4Z" /><path d="m11 13 4-4" /></>,
  lock: <><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" /></>,
  shield: <><path d="M12 3 20 6v5c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-3Z" /><path d="m8.5 12 2.2 2.2 4.8-5" /></>,
  smartphone: <><rect x="6" y="2" width="12" height="20" rx="3" /><path d="M10 5h4M11 18h2" /></>,
  home: <><path d="m3 11 9-8 9 8M5 10v11h14V10M9 21v-7h6v7" /></>,
  building: <><rect x="4" y="3" width="12" height="18" rx="1" /><path d="M16 9h4v12H8M8 7h4M8 11h4M8 15h4" /></>,
  check: <><path d="m5 12 4 4L19 6" /></>,
  chevron: <><path d="m8 10 4 4 4-4" /></>,
  wallet: <><path d="M4 6a2 2 0 0 1 2-2h12v4H6a2 2 0 0 0 0 4h15v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" /><path d="M17 15h1" /></>,
}

type IconProps = {
  name: string
  size?: number
  className?: string
}

export function Icon({ name, size = 24, className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      {icons[name] ?? icons.package}
    </svg>
  )
}
