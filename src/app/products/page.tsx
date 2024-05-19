import Link from "next/link"
import { Button } from "@/components/ui/button"


const ProductsPage = () => {
  return (
    <>
    <div className="relative py-12 bg-gray-900 sm:py-16 lg:py-20 xl:pt-32 xl:pb-44">
      <div className="absolute inset-0 hidden lg:block">
        <img
          className="object-cover object-right-bottom w-full h-full"
          src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/1/background.png"
          alt=""
        />
      </div>
      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-xl mx-auto text-center lg:max-w-md xl:max-w-lg lg:text-left lg:mx-0">
          <h1 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl xl:leading-tight">
            Build SaaS Landing Page without Writing a Single Code
          </h1>
          <p className="mt-8 text-base font-normal leading-7 text-gray-400 lg:max-w-md xl:pr-0 lg:pr-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc
            nisl eu consectetur. Mi massa elementum odio eu viverra amet.
          </p>
          <div className="flex items-center justify-center mt-8 space-x-5 xl:mt-16 lg:justify-start">
            <a
              href="#"
              className="
                      inline-flex
                      items-center
                      justify-center
                      px-3
                      py-3
                      text-base
                      font-bold
                      leading-7
                      text-gray-900
                      transition-all
                      duration-200
                      bg-white
                      border border-transparent
                      rounded-md
                      sm:px-6
                      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white
                      hover:bg-gray-200
                  "
              role="button"
            >
              Get UI Kit Now
            </a>
            <a
              href="#"
              className="
                      inline-flex
                      items-center
                      justify-center
                      px-2
                      py-3
                      text-base
                      font-bold
                      leading-7
                      text-white
                      transition-all
                      duration-200
                      bg-transparent
                      border border-transparent
                      rounded-md
                      sm:px-4
                      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-gray-700
                      hover:bg-gray-700
                  "
              role="button"
            >
              Check live preview
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 lg:hidden">
        <img
          className="object-cover w-full h-full"
          src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/1/bg.png"
          alt=""
        />
      </div>
    </div>


    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-6">
      <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300 dark:bg-gray-950">
        <Link className="block relative" href="#">
          <img
            alt="Product 1"
            className="w-full h-60 object-cover group-hover:opacity-90 transition-opacity duration-300"
            height="300"
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width="400"
          />
        </Link>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 line-clamp-2">Cozy Knit Sweater</h3>
          <p className="text-gray-500 mb-4 line-clamp-2">Soft and comfortable knit sweater perfect for chilly days.</p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">$49.99</span>
            <Button size="sm">Add to Cart</Button>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300 dark:bg-gray-950">
        <Link className="block relative" href="#">
          <img
            alt="Product 2"
            className="w-full h-60 object-cover group-hover:opacity-90 transition-opacity duration-300"
            height="300"
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width="400"
          />
        </Link>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 line-clamp-2">Leather Backpack</h3>
          <p className="text-gray-500 mb-4 line-clamp-2">Durable and stylish leather backpack for everyday use.</p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">$79.99</span>
            <Button size="sm">Add to Cart</Button>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300 dark:bg-gray-950">
        <Link className="block relative" href="#">
          <img
            alt="Product 3"
            className="w-full h-60 object-cover group-hover:opacity-90 transition-opacity duration-300"
            height="300"
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width="400"
          />
        </Link>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 line-clamp-2">Wireless Headphones</h3>
          <p className="text-gray-500 mb-4 line-clamp-2">
            High-quality wireless headphones with noise-cancelling technology.
          </p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">$99.99</span>
            <Button size="sm">Add to Cart</Button>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300 dark:bg-gray-950">
        <Link className="block relative" href="#">
          <img
            alt="Product 4"
            className="w-full h-60 object-cover group-hover:opacity-90 transition-opacity duration-300"
            height="300"
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width="400"
          />
        </Link>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 line-clamp-2">Minimalist Desk Lamp</h3>
          <p className="text-gray-500 mb-4 line-clamp-2">Sleek and modern desk lamp to brighten up your workspace.</p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">$39.99</span>
            <Button size="sm">Add to Cart</Button>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300 dark:bg-gray-950">
        <Link className="block relative" href="#">
          <img
            alt="Product 5"
            className="w-full h-60 object-cover group-hover:opacity-90 transition-opacity duration-300"
            height="300"
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width="400"
          />
        </Link>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 line-clamp-2">Vintage Record Player</h3>
          <p className="text-gray-500 mb-4 line-clamp-2">
            Retro-inspired record player for your classic vinyl collection.
          </p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">$149.99</span>
            <Button size="sm">Add to Cart</Button>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300 dark:bg-gray-950">
        <Link className="block relative" href="#">
          <img
            alt="Product 6"
            className="w-full h-60 object-cover group-hover:opacity-90 transition-opacity duration-300"
            height="300"
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width="400"
          />
        </Link>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 line-clamp-2">Outdoor Camping Gear</h3>
          <p className="text-gray-500 mb-4 line-clamp-2">
            Essential camping equipment for your next outdoor adventure.
          </p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">$89.99</span>
            <Button size="sm">Add to Cart</Button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ProductsPage;
