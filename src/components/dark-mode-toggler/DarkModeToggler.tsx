import { Switch } from "@components/ui/switch/switch"
import { Title } from "@components/ui/title/title"
import { themeStore } from "@stores/themeStore"
import { classMerger } from '@utils/classMerger'

export const DarkModeToggler = ({ className }: { className?: string }) => {
  const { theme, setTheme } = themeStore()

  const handleThemeChange = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  return (
    <section 
      className={classMerger(
        'w-full flex items-center justify-between',
        className
      )}
    >
      <Title as="h6" className="text-primary font-medium text-base">Dark Mode</Title>
      <Switch checked={theme === 'dark'} onCheckedChange={handleThemeChange} />
    </section>
  )
}