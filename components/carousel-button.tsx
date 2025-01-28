import { BoundaryButton } from "./boundary-button";

type Props = {
  url: string;
  download: string;
};

export function CarouselButton({ content }: { content: Props }) {
  const { url, download } = content;
  return (
    <div className="border-t-[1px] border-border pt-6 mt-6">
      <BoundaryButton>
        {url ? <a href={url}>경로</a> : ""}
        {download ? (
          <a href={download} download>
            다운로드
          </a>
        ) : (
          ""
        )}
      </BoundaryButton>
    </div>
  );
}
