"use client";
import { useLayoutEffect, useRef, useState } from "react";

export function UseHoverEffect() {
  const [isActiveItem, setIsActiveItem] = useState<HTMLElement | null>(null);
  const listItemsRef = useRef<NodeListOf<Element> | null>(null);
  const highlightRef = useRef<HTMLElement | null>(null);
  const menuContainerRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    listItemsRef.current = document.querySelectorAll(".menu-item");
    highlightRef.current = document.querySelector(".highlight");
    menuContainerRef.current = document.querySelector(".menu-container");

    const listItems = listItemsRef.current;
    const highlight = highlightRef.current;
    const menuContainer = menuContainerRef.current;

    const updateHighlight = (item: HTMLElement, isActive = false) => {
      const rect = item.getBoundingClientRect();
      const containerRect = item.parentElement?.getBoundingClientRect();

      if (highlight && containerRect) {
        highlight.style.width = `${rect.width}px`;
        highlight.style.left = `${rect.left - containerRect.left}px`;
        highlight.style.opacity = isActive ? "0" : "1";
      }
    };

    const handleItemClick = (e: MouseEvent) => {
      const clickedItem = e.target as HTMLElement;

      if (isActiveItem === clickedItem) {
        setIsActiveItem(null);
        if (highlight) highlight.style.opacity = "0";
      } else {
        setIsActiveItem(clickedItem);
        updateHighlight(clickedItem, true);
      }
    };

    const handleItemHover = (e: MouseEvent) => {
      const clickedItem = e.target as HTMLElement;
      if (clickedItem !== isActiveItem) {
        updateHighlight(clickedItem, false);
      }
    };

    const handleItemLeave = () => {
      if (isActiveItem) {
        updateHighlight(isActiveItem, true);
      } else {
        if (highlight) highlight.style.opacity = "0";
      }
    };

    listItems.forEach((item) => {
      (item as HTMLElement).addEventListener("click", handleItemClick);
      (item as HTMLElement).addEventListener("mouseenter", handleItemHover);
    });
    if (menuContainer)
      menuContainer.addEventListener("mouseleave", handleItemLeave);
  }, [isActiveItem]);

  return isActiveItem;
}
