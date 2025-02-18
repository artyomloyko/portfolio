export default function Summary() {
  return (
    <div className="flex flex-col gap-6 mb-12">
      <p className="text-sm font-normal md:text-base">
        I&apos;m a Software Developer with 6+ years of experience specializing in building
        intuitive, user friendly and high-performance web applications. Expert in React ecosystem
        and modern JavaScript, with a strong focus on creating exceptional user experiences.
      </p>
      <p className="text-sm font-normal md:text-base">
        I have proven track record of delivering complex projects using React, Next.js and TypeScript.
        Passionate about web performance optimization and implementing best practices in frontend
        architecture.
      </p>
      <p>
        <a
          className="no-underline cursor-pointer bg-no-repeat bg-gradient-to-r from-primary-500 to-primary-500 [background-position:0_100%] [background-size:100%_0.2em] hover:[background-size:100%_100%] hover:text-white focus:[background-size:100%_100%] motion-safe:transition-all motion-safe:duration-300 dark:from-primary-500 dark:to-primary-500"
          href={process.env.NEXT_PUBLIC_CV_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out my CV
        </a>{' '}
        for more information.
      </p>
    </div>
  );
}
