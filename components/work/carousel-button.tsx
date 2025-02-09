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
          <a href={url} target="_blank">
            경로
          </a>
        ) : (
          ""
        )}
        {download ? (
          <a href={download} download>
            다운로드
          </a>
        ) : (
          ""
        )}
        {git ? (
          <a href={git} target="_blank">
            깃허브
          </a>
        ) : (
          ""
        )}
      </BoundaryButton>
    </div>
  );
}
