import { Container } from "@/components/site/Section";
import { ButtonLink } from "@/components/site/Buttons";

export default function NotFound() {
  return (
    <section className="pt-40 pb-28">
      <Container narrow className="text-center">
        <p className="eyebrow eyebrow-center justify-center">Page not found</p>
        <h1 className="display-title mt-5 text-[2.4rem] text-plum-900">This bouquet has not been made yet.</h1>
        <p className="mt-5 text-muted">The link may be old, or the page may have moved. Everything on the site is one step from the home page.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href="/contact" variant="outline">
            Inquire
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
