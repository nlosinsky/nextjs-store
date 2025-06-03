import Link from "next/link";

import HeroCarousel from "@/components/home/HeroCarousel";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <section className="grid grid-cols-1 items-center gap-24 lg:grid-cols-2">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          We are changing the way people shop
        </h1>
        <p className="text-muted-foreground mt-8 max-w-xl text-lg leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque et
          voluptas saepe in quae voluptate, laborum maiores possimus illum
          reprehenderit aut delectus veniam cum perferendis unde sint doloremque
          non nam.
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link href="/products">Our Products</Link>
        </Button>
      </div>
      <div>
        <HeroCarousel />
      </div>
    </section>
  );
}

export default Hero;
