import Link from "next/link";
import { BoundaryButton } from "../ui/boundary-button";
import { ExternalLink } from "../external-link";

type Props = {
  url: string;
  download: string;
  git: string;
};

export function CarouselButton({ content }: { content: Props }) {
  const { url, download, git } = content;
  return (
    <div className="border-t-[1px] border-border pt-2 mt-6">
      <BoundaryButton>
        {url ? (
          <ExternalLink href={url} label="작업물 경로 새창 열기 버튼">
            URL
          </ExternalLink>
        ) : (
          ""
        )}
        {download ? (
          <Link href={download} aria-label="작업물 다운로드 버튼" download>
            Download
          </Link>
        ) : (
          ""
        )}
        {git ? (
          <ExternalLink href={git} label="작업물 깃허브 저장소 새창 열기 버튼">
            Github
          </ExternalLink>
        ) : (
          ""
        )}
      </BoundaryButton>
    </div>
  );
}
