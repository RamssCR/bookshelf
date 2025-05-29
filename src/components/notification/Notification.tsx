import { Moon } from 'lucide-react'
import { Title } from '@components/ui/title/title'
import { Switch } from '@components/ui/switch/switch'
import { themeStore } from '@stores/themeStore'

export const Notification = () => {
  const { theme, setTheme } = themeStore()

  const handleThemeChange = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  return (
    <article className="border border-input rounded-lg p-4 mt-2 mb-8 flex items-center justify-between">
      <section className="flex items-center gap-3 w-full">
        <Moon className="fill-primary size-6" />
        <section className="flex flex-col items-start gap-1">
          <Title as="h6" className="text-sm font-medium">Adding dark mode</Title>
          <p className="text-muted-foreground font-medium text-xs">Read your books in dark mode now!</p>
        </section>
      </section>
      <Switch checked={theme === 'dark'} onCheckedChange={handleThemeChange} />
    </article>
  )
}