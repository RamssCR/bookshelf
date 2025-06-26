import { Moon } from 'lucide-react'
import { Title } from '@components/ui/title'
import { Switch } from '@components/ui/switch'
import { themeStore } from '@stores/themeStore'

export const Notification = () => {
  const { theme, setTheme } = themeStore()
  const isDarkMode = theme === 'dark'

  const handleThemeChange = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  return (
    <article 
      className="border border-input rounded-lg p-4 mt-2 mb-8 flex items-center justify-between"
      role="region"
      aria-labelledby="dark-mode-notification-title"
      aria-describedby="dark-mode-notification-description"
    >
      <section className="flex items-center gap-3 w-full">
        <Moon className="fill-primary size-6" />
        <section className="flex flex-col items-start gap-1">
          <Title 
            as="h6" 
            className="text-sm font-medium"
            id="dark-mode-notification-title"
          >
            Adding dark mode
          </Title>
          <p 
            className="text-muted-foreground font-medium text-xs"
            id="dark-mode-notification-description"
          >
            Read your books in dark mode now!
          </p>
        </section>
      </section>
      <Switch 
        checked={isDarkMode} 
        onCheckedChange={handleThemeChange} 
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      />
    </article>
  )
}