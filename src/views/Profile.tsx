import { ComingSoon } from "@components/coming-soon/ComingSoon"
import { UserCard } from "@components/profile/UserCard"
import { ContentContainer } from "@components/ui/containers/ContentContainer"
import { Title } from "@components/ui/title"
import { Layout } from "@layouts/Layout"
import { userStore } from "@stores/userStore"

export const Profile = () => {
  const { user } = userStore()

  return (
    <Layout>
      <ContentContainer>
        <section className="w-full flex flex-col items-start">
          <Title className="text-2xl font-semibold text-primary">Profile</Title>
          <p className="text-muted-foreground font-medium">Manage your information... when you can do so, of course.</p>
        </section>
        <UserCard user={user!} />
        <section className="flex flex-col items-start gap-3 w-full">
          <Title as="h2" className="text-lg font-medium text-primary lg:text-xl">Manage your information</Title>
          <ComingSoon />
        </section>
      </ContentContainer>
    </Layout>
  )
}