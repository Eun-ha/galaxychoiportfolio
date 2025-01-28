export const ExternalLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <a
      href={href}
      className="inline-flex px-3 py-1 no-underline bg-bg-active rounded-lg gap-x-2 hover:bg-bg-hover ml-2 first:ml-0"
    >
      {children}
    </a>
  );
};
