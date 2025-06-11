import { AppLink } from "@components/ui/AppLink";
import { Title } from "@components/ui/title";

export const NoBooks = () => (
  <section className="w-full h-[60svh] lg:h-full flex flex-col items-center justify-center gap-2">
    <Title as="h2" className="text-primary text-2xl lg:text-3xl">No books in your shelf!</Title>
    <p className="text-muted-foreground font-medium text-center">
      Worry not, you can always add some books to your shelf by going to the <AppLink to="/discover" className="hover:underline">Discover</AppLink> page.
    </p>
  </section>
)