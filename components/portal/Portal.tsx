"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { Home } from "@/data/main";
import ModalContent from "./ModalContent";
import { BoundaryButton } from "../ui/boundary-button";

interface Props {
  data: Pick<Home, "home">[];
}

export default function Portal(props: Props) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <BoundaryButton theme="dark">
        <button onClick={() => setShowModal(true)} aria-label="더 읽기 버튼">
          Read More
        </button>
      </BoundaryButton>

      {showModal &&
        createPortal(
          <ModalContent {...props} onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
}
