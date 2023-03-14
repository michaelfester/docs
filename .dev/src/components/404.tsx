import GlideButton from "./GlideButton";
import { Header } from "./Typography";

export default function NotFound() {
  return (
    <>
      <div className="my-1 rounded-3xl bg-neutrals-light-2 pt-4 pb-4 dark:bg-transparent md:pb-5 lg:pb-4">
        <div className="grid justify-items-center px-4 py-8 text-center">
          <Header
            variant="xl"
            className="my-0 text-neutrals-light-15 dark:text-white"
          >
            Page Not Found
          </Header>
          <p className="mt-8 text-xlg">
            Don&apos;t worry, it&apos;s almost certainly our fault
          </p>
          <GlideButton
            className="mt-8"
            variant="tertiary-line"
            size="xl"
            as="a"
            href="/"
          >
            Go back to homepage
          </GlideButton>
        </div>
      </div>
    </>
  );
}
