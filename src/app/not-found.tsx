import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main>
        <Section className="pt-40 pb-32">
          <div className="text-center">
            <p className="text-8xl font-bold text-muted-foreground/20">404</p>
            <h1 className="mt-4 text-2xl font-bold text-foreground">
              Page not found
            </h1>
            <p className="mt-2 text-muted-foreground">
              The page you&apos;re looking for doesn&apos;t exist.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/" variant="secondary">
                <ArrowLeft className="w-4 h-4" />
                Back home
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
