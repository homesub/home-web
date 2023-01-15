import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ShoppingCartIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { api } from "../utils/api";

const navigation = [
  { name: "Services", href: "#" },
  { name: "Company", href: "#" },
];
const services = [
  {
    name: "Lawn Care",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-category-01.jpg",
  },
  {
    name: "Cleaning",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-category-02.jpg",
  },
  {
    name: "Painting",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-category-04.jpg",
  },
  {
    name: "Handyman",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-category-05.jpg",
  },
  {
    name: "Remodeling",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-category-03.jpg",
  },
];
const testimonials = [
  {
    id: 1,
    quote:
      "My order arrived super quickly. The product is even better than I hoped it would be. Very happy customer over here!",
    attribution: "Sarah Peters, New Orleans",
  },
  {
    id: 2,
    quote:
      "I had to return a purchase that didn’t fit. The whole process was so simple that I ended up ordering two new items!",
    attribution: "Kelly McPherson, Chicago",
  },
  {
    id: 3,
    quote:
      "Now that I’m on holiday for the summer, I’ll probably order a few more shirts. It’s just so convenient, and I know the quality will always be there.",
    attribution: "Chris Paul, Phoenix",
  },
];
const footerNavigation = {
  services,
  customerService: [
    { name: "Contact", href: "#" },
    { name: "Satisfaction Policy", href: "#" },
    { name: "Secure Payments", href: "#" },
    { name: "FAQ", href: "#" },
  ],
  company: [
    { name: "Who we are", href: "#" },
    { name: "Sustainability", href: "#" },
    { name: "Press", href: "#" },
    { name: "Careers", href: "#" },
  ],

  bottomLinks: [
    { name: "Accessibility", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Home: NextPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Home App</title>
        <meta name="description" content="Home App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white">
        {/* Mobile menu */}
        <Transition.Root show={mobileMenuOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileMenuOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>
            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                  <div className="flex px-4 pt-5 pb-2">
                    <button
                      type="button"
                      className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  {/* Links */}
                  <div className="space-y-6  border-gray-200 py-6 px-4">
                    {navigation.map((page) => (
                      <div key={page.name} className="flow-root">
                        <a
                          href={page.href}
                          className="-m-2 block p-2 font-medium text-gray-900"
                        >
                          {page.name}
                        </a>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                    <div className="flow-root">
                      <a
                        href="#"
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        Create an account
                      </a>
                    </div>
                    <div className="flow-root">
                      <a
                        href="#"
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        Sign in
                      </a>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <header className="relative z-10">
          <nav aria-label="Top">
            {/* Top navigation */}
            <div className="bg-gray-900">
              <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Currency selector */}
                <p className="flex-1 text-center text-sm font-medium text-white lg:flex-none">
                  Packaged subscriptions offer extra savings!
                </p>

                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a
                    href="#"
                    className="text-sm font-medium text-white hover:text-gray-100"
                  >
                    Create an account
                  </a>
                  <span className="h-6 w-px bg-gray-600" aria-hidden="true" />
                  <a
                    href="#"
                    className="text-sm font-medium text-white hover:text-gray-100"
                  >
                    Sign in
                  </a>
                </div>
              </div>
            </div>
            {/* Secondary navigation */}
            <div className="bg-white">
              <div className="border-b border-gray-200">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="flex h-16 items-center justify-between">
                    {/* Logo (lg+) */}
                    <div className="hidden lg:flex lg:items-center">
                      <a href="#">
                        <span className="sr-only">Your Company</span>
                        <img
                          className="h-8 w-auto"
                          src="https://tailwindui.com/img/logos/mark.svg?color=teal&shade=600"
                          alt=""
                        />
                      </a>
                    </div>
                    {navigation.map((page) => (
                      <div
                        key={page.name}
                        className="hidden lg:flex lg:items-center lg:space-x-8"
                      >
                        <a
                          href={page.href}
                          className="ml-4 text-base font-medium text-gray-600 hover:text-gray-900"
                        >
                          {page.name}
                        </a>
                      </div>
                    ))}

                    {/* Mobile menu and search (lg-) */}
                    <div className="flex flex-1 items-center lg:hidden">
                      <button
                        type="button"
                        className="-ml-2 rounded-md bg-white p-2 text-gray-400"
                        onClick={() => setMobileMenuOpen(true)}
                      >
                        <span className="sr-only">Open menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    {/* Logo (lg-) */}
                    <a href="#" className="lg:hidden">
                      <span className="sr-only">Easy Home</span>
                      <img
                        src="https://tailwindui.com/img/logos/mark.svg?color=teal&shade=600"
                        alt=""
                        className="h-8 w-auto"
                      />
                    </a>
                    <div className="flex flex-1 items-center justify-end">
                      <div className="flex items-center lg:ml-8">
                        <div className="flex space-x-8">
                          <div className="flex">
                            <a
                              href="#"
                              className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            >
                              <span className="sr-only">Account</span>
                              <UserIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </a>
                          </div>
                        </div>
                        <span
                          className="mx-4 h-6 w-px bg-gray-200 lg:mx-6"
                          aria-hidden="true"
                        />
                        <div className="flow-root">
                          <a
                            href="#"
                            className="group -m-2 flex items-center p-2"
                          >
                            <ShoppingCartIcon
                              className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                              aria-hidden="true"
                            />
                            <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                              0
                            </span>
                            <span className="sr-only">
                              items in cart, view bag
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <main>
          {/* Hero */}
          <div className="flex flex-col border-b border-gray-200 lg:border-0">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute hidden h-full w-1/2 bg-gray-100 lg:block"
              />
              <div className="relative bg-gray-100 lg:bg-transparent">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
                  <div className="mx-auto max-w-2xl py-24 lg:max-w-none lg:py-64">
                    <div className="lg:pr-16">
                      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
                        Focus on what matters
                      </h1>
                      <p className="mt-4 text-xl text-gray-600">
                        Sign up for one of our home service subscriptions and
                        never worry about chores again.
                      </p>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="inline-block rounded-md border border-transparent bg-teal-600 py-3 px-8 font-medium text-white hover:bg-teal-700"
                        >
                          Get Started
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-48 w-full sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-1/2">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-02-hero-half-width.jpg"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Services */}
          <section
            aria-labelledby="category-heading"
            className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8"
          >
            <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
              <h2
                id="category-heading"
                className="text-2xl font-bold tracking-tight text-gray-900"
              >
                Select a Service
              </h2>
              <a
                href="#"
                className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
              >
                Browse all services
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
            <div className="mt-4 flow-root">
              <div className="-my-2">
                <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
                  <div className="min-w-screen-xl absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                    {services.map((service) => (
                      <a
                        key={service.name}
                        href={service.href}
                        className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                      >
                        <span aria-hidden="true" className="absolute inset-0">
                          <img
                            src={service.imageSrc}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </span>
                        <span
                          aria-hidden="true"
                          className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                        />
                        <span className="relative mt-auto text-center text-xl font-bold text-white">
                          {service.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 px-4 sm:hidden">
              <a
                href="#"
                className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Browse all services
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </section>
          {/* Sale and testimonials */}
          <div className="relative overflow-hidden">
            {/* Testimonials */}
            <section
              aria-labelledby="testimonial-heading"
              className="relative mx-auto max-w-7xl py-24 px-4 sm:px-6 lg:py-32 lg:px-8"
            >
              <div className="mx-auto max-w-2xl lg:max-w-none">
                <h2
                  id="testimonial-heading"
                  className="text-2xl font-bold tracking-tight text-gray-900"
                >
                  What are people saying?
                </h2>

                <div className="mt-16 space-y-16 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
                  {testimonials.map((testimonial) => (
                    <blockquote
                      key={testimonial.id}
                      className="sm:flex lg:block"
                    >
                      <svg
                        width={24}
                        height={18}
                        viewBox="0 0 24 18"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="flex-shrink-0 text-gray-300"
                      >
                        <path
                          d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                          fill="currentColor"
                        />
                      </svg>
                      <div className="mt-8 sm:mt-0 sm:ml-6 lg:mt-10 lg:ml-0">
                        <p className="text-lg text-gray-600">
                          {testimonial.quote}
                        </p>
                        <cite className="mt-4 block font-semibold not-italic text-gray-900">
                          {testimonial.attribution}
                        </cite>
                      </div>
                    </blockquote>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </main>

        <footer aria-labelledby="footer-heading" className="bg-white">
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="border-t border-gray-200">
              <div className="pt-16 pb-20">
                <div className="md:flex md:justify-center">
                  <img
                    src="https://tailwindui.com/img/logos/mark.svg?color=teal&shade=600"
                    alt=""
                    className="h-8 w-auto"
                  />
                </div>
                <div className="mx-auto mt-16 max-w-5xl xl:grid xl:grid-cols-2 xl:gap-8">
                  <div className="sm:grid sm:grid-cols-3 sm:gap-8">
                    <div className="mb-4 sm:mb-0">
                      <h3 className="text-sm font-medium text-gray-900">
                        Services
                      </h3>
                      <ul role="list" className="mt-6 space-y-6">
                        {footerNavigation.services.map((service) => (
                          <li key={service.name} className="text-sm">
                            <a
                              href={service.href}
                              className="text-gray-500 hover:text-gray-600"
                            >
                              {service.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-4 sm:mb-0">
                      <h3 className="text-sm font-medium text-gray-900">
                        Customer Service
                      </h3>
                      <ul role="list" className="mt-6 space-y-6">
                        {footerNavigation.customerService.map((item) => (
                          <li key={item.name} className="text-sm">
                            <a
                              href={item.href}
                              className="text-gray-500 hover:text-gray-600"
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-4 sm:mb-0">
                      <h3 className="text-sm font-medium text-gray-900">
                        Company
                      </h3>
                      <ul role="list" className="mt-6 space-y-6">
                        {footerNavigation.company.map((item) => (
                          <li key={item.name} className="text-sm">
                            <a
                              href={item.href}
                              className="text-gray-500 hover:text-gray-600"
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:grid lg:grid-cols-2 lg:gap-x-6 xl:gap-x-8">
                <div className="flex items-center rounded-lg bg-gray-100 p-6 sm:p-10">
                  <div className="mx-auto max-w-sm">
                    <h3 className="font-semibold text-gray-900">
                      Sign up for our newsletter
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      The latest news, articles, and resources, sent to your
                      inbox weekly.
                    </p>
                    <form className="mt-4 sm:mt-6 sm:flex">
                      <label htmlFor="email-address" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="email-address"
                        type="text"
                        autoComplete="email"
                        required
                        className="w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                      />
                      <div className="mt-3 sm:mt-0 sm:ml-4 sm:flex-shrink-0">
                        <button
                          type="submit"
                          className="flex w-full items-center justify-center rounded-md border border-transparent bg-teal-600 py-2 px-4 text-base font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-white"
                        >
                          Sign up
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="relative mt-6 flex items-center py-12 px-6 sm:py-16 sm:px-10 lg:mt-0">
                  <div className="absolute inset-0 overflow-hidden rounded-lg">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/footer-02-exclusive-sale.jpg"
                      alt=""
                      className="h-full w-full object-cover object-center saturate-0 filter"
                    />
                    <div className="absolute inset-0 bg-teal-600 bg-opacity-90" />
                  </div>
                  <div className="relative mx-auto max-w-sm text-center">
                    <h3 className="text-2xl font-bold tracking-tight text-white">
                      Get early access
                    </h3>
                    <p className="mt-2 text-gray-200">
                      Did you sign up to the newsletter? If so, use the keyword
                      we sent you to get access.{" "}
                      <a
                        href="#"
                        className="whitespace-nowrap font-bold text-white hover:text-gray-200"
                      >
                        Go now<span aria-hidden="true"> &rarr;</span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-10 md:flex md:items-center md:justify-between">
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-500">
                  &copy; {new Date().getFullYear()} All Rights Reserved
                </p>
              </div>

              <div className="mt-4 flex items-center justify-center md:mt-0">
                <div className="flex space-x-8">
                  {footerNavigation.bottomLinks.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-sm text-gray-500 hover:text-gray-600"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
