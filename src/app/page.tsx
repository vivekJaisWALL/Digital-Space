import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button"
import { ArrowDownToLine, CheckCircle, Fingerprint, Leaf } from "lucide-react";

const features=[
  {
    name: "On the go delivery",
    icon: ArrowDownToLine,
    description: "Get your digital assets delivered straight to your inbox within seconds—fast, seamless, and ready to go!"
  },
  {
    name: "Quality-Certified",
    icon: CheckCircle,
    description: "Every asset on our platform is rigorously reviewed and quality-certified, ensuring you receive only the best, top-tier digital products."
  },
  // {
  //   name: "Committed to a Sustainable Future",
  //   icon: Leaf,
  //   description: "At DigitalSpace, 1% of every sale goes toward making the world a greener place. By supporting tree planting and environmental restoration, we're helping to preserve and restore the planet’s natural beauty—one purchase at a time."
  // },
  {
    name: "Secure Transactions",
    icon: Fingerprint,
    description: "Your payments are protected with industry-standard encryption, ensuring safe and secure transactions every time."
  }
]

export default function Home() {
  return (
    <>
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Turning Concepts into{' '}<span className="text-blue-600">Digital Masterpieces.</span></h1>
        
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">
          Welcome to DigitalSpace.
          Whether you're here to share your creativity or find the perfect digital asset, DigitalSpace connects creators and customers in one vibrant community. 
          Dive in and explore the future of digital creativity!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href='/products' className={buttonVariants()}>Browse Trending</Link>
          <Button variant='ghost'>Quality Assurance &rarr;</Button>
        </div>
      </div>

      {/* PRODUCTS SECTION */}

    </MaxWidthWrapper>

    <section className="border-t border-gray-200 bg-gray-50">
      <MaxWidthWrapper className="py-20">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          {features.map((feature) => (
            <div key={feature.name} className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
              <div className="md:flex-shrink-0 flex justify-center">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                  {<feature.icon className="w-1/3 h-1/3"/>}
                </div>
              </div>

              <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                <h3 className="text-base font-medium text-gray-900">
                  {feature.name}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
    </>
  );
}
