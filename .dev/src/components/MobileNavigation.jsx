import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Dialog } from "@headlessui/react";

import { Logo } from "@/components/Logo";
import { Navigation } from "@/components/Navigation";

export function MobileNavigation({ navigation, isOpen, setIsOpen }) {
  let router = useRouter();

  useEffect(() => {
    if (!isOpen) return;

    function onRouteChange() {
      setIsOpen(false);
    }

    router.events.on("routeChangeComplete", onRouteChange);
    router.events.on("routeChangeError", onRouteChange);

    return () => {
      router.events.off("routeChangeComplete", onRouteChange);
      router.events.off("routeChangeError", onRouteChange);
    };
  }, [router, isOpen, setIsOpen]);

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={setIsOpen}
        className="fixed inset-0 z-50 flex items-start overflow-y-auto bg-slate-900/50 pr-10 backdrop-blur lg:hidden"
      >
        <Dialog.Panel className="min-h-full w-full max-w-xs bg-white px-4 pt-5 pb-12 dark:bg-neutrals-light-15/75 sm:px-6">
          <Dialog.Title className="sr-only">Navigation</Dialog.Title>
          <div className="flex items-center justify-between">
            <Link href="/">
              <a className="block w-auto overflow-hidden">
                <span className="sr-only">Home page</span>
                <Logo />
              </a>
            </Link>

            <button type="button" onClick={() => setIsOpen(false)}>
              <span className="sr-only">Close navigation</span>
              <svg
                aria-hidden="true"
                className="h-6 w-6 stroke-slate-500"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M5 5l14 14M19 5l-14 14" />
              </svg>
            </button>
          </div>
          <Navigation navigation={navigation} className="mt-5 px-1" />
        </Dialog.Panel>
      </Dialog>
    </>
  );
}
