type LinkProps = {
  children: React.ReactNode;
  href?: string;
  label: string;
};

export function ExternalLink({ children, href, label }: LinkProps) {
  return (
    <a href={href} aria-label={label} target="_blank">
      {children}
    </a>
  );
}
