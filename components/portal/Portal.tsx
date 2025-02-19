"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { Home } from "@/data/main";
import ModalContent from "./ModalContent";
import { Button } from "../button";

interface Props {
  data: Pick<Home, "home">[];
}

export default function Portal(props: Props) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Button onClick={() => setShowModal(true)} aria-label="더 읽기 버튼">
        Read More
      </Button>

      {showModal &&
        createPortal(
          <ModalContent {...props} onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
}
