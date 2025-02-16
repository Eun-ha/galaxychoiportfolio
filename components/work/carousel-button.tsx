import Link from "next/link";
import { BoundaryButton } from "../ui/boundary-button";

type Props = {
  url: string;
  download: string;
  git: string;
};

export function CarouselButton({ content }: { content: Props }) {
  const { url, download, git } = content;
  return (
    <div className="border-t-[1px] border-border pt-6 mt-6">
      <BoundaryButton>
        {url ? (
          <Link
            href={url}
            aria-label="작업물 경로 새창 열기 버튼"
            target="_blank"
          >
            경로
          </Link>
        ) : (
          ""
        )}
        {download ? (
          <a href={download} aria-label="작업물 다운로드 버튼" download>
            다운로드
          </a>
        ) : (
          ""
        )}
        {git ? (
          <Link
            href={git}
            aria-label="작업물 깃허브 저장소 새창 열기 버튼"
            target="_blank"
          >
            깃허브
          </Link>
        ) : (
          ""
        )}
      </BoundaryButton>
    </div>
  );
}
