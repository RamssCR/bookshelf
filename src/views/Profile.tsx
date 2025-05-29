import { ComingSoon } from "@components/coming-soon/ComingSoon"
import { ContentContainer } from "@components/ui/containers/ContentContainer"
import { Title } from "@components/ui/title/title"
import { Layout } from "@layouts/Layout"
import { UserIcon } from "lucide-react"

export const Profile = () => {
  return (
    <Layout>
      <ContentContainer>
        <section className="w-full flex flex-col items-start">
          <Title className="text-2xl font-semibold text-primary">Profile</Title>
          <p className="text-muted-foreground font-medium">Manage your information... when you can do so, of course.</p>
        </section>
        <section className="w-full flex flex-col items-center gap-3 md:flex-row md:gap-5">
          <div className="p-2.5 size-36 flex items-center justify-center border-2 border-input rounded-full md:size-24">
            <UserIcon className="fill-primary size-16 md:size-12" />
          </div>
          <article className="flex flex-col items-center gap-1 md:items-start">
            <Title as="h5" className="text-xl font-medium text-primary">RamssC</Title>
            <p className="text-muted-foreground font-medium text-sm">Bookaholic</p>
            <p className="-mt-1 text-muted-foreground font-medium text-sm">example@example.com</p>
          </article>
        </section>
        <section className="flex flex-col items-start gap-3 w-full">
          <Title as="h2" className="text-lg font-medium text-primary lg:text-xl">Manage your information</Title>
          <ComingSoon />
        </section>
      </ContentContainer>
    </Layout>
  )
}