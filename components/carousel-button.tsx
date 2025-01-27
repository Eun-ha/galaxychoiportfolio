import { ExternalLink } from "./external-link";

type Props = {
  url: string;
  download: string;
};

export function CarouselButton({ content }: { content: Props }) {
  const { url, download } = content;
  return (
    <div className="border-t-[1px] border-border pt-6 mt-6">
      {url ? <ExternalLink href={url}>경로</ExternalLink> : ""}
      {download ? <ExternalLink href={download}>다운로드</ExternalLink> : ""}
    </div>
  );
}
