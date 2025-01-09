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
      className="inline-flex px-3 py-1 text-sm font-medium text-gray-100 no-underline bg-gray-700 rounded-lg gap-x-2 hover:bg-gray-500 hover:text-white ml-2 first:ml-0"
    >
      <div>{children}</div>
    </a>
  );
};
