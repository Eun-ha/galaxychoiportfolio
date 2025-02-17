import { Home } from "@/data/main";
import CloseIcon from "@/icons/closeIcon";

interface Props {
  data: Pick<Home, "home">[];
  onClose: () => void;
}

export default function ModalContent(props: Props) {
  const { description, description2, description3 } = props.data[0].home[1];

  return (
    <div className="modal w-full h-full fixed top-0 left-0 z-50 bg-neutral-900/70">
      <div className="h-[85%] mt-[15%] mx-4 p-5 overflow-y-scroll  bg-neutral-900 md:max-w-[500px] md:max-h-[650px] md:h-[60%] md:w-1/2 md:mx-auto">
        <div className="text-right">
          <button
            className="modalCloseBtn inline-block"
            onClick={props.onClose}
            aria-label="모달 닫기 버튼"
          >
            <CloseIcon />
          </button>
        </div>
        <div className="[&_p]:pb-4">
          <p>{description2}</p>
          <p>{description}</p>
          <p>{description3}</p>
        </div>
      </div>
    </div>
  );
}
