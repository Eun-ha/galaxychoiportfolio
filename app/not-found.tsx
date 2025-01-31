import NotfoundIcon from "@/icons/notfoundIcon";

export default function NotFound() {
  return (
    <div className="mt-[15%] text-center">
      <NotfoundIcon />
      <h2 className="text-lg mt-2">페이지를 찾지 못하였습니다. (Not Found)</h2>
      <p className="mt-2">요청한 리소스를 찾을 수 없습니다.</p>
    </div>
  );
}
