"use client";

import { useEffect, useRef, useState } from "react";
import { useScrollSpy } from "../hooks/use-scroll-spy";
import { useWindowWidth } from "@react-hook/window-size";
import { fuse } from "@bonekit/ui/utils";

export const OnThisPage = ({
  headings,
}: {
  headings: { id: string; text: string; level: string }[];
}) => {
  // const [activeId, setActiveId] = useState<string>("");
  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({
    top: 0,
    height: 0,
  });
  const activeRef = useRef<HTMLAnchorElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { activeId, setActiveId } = useScrollSpy(headings);
  const width = useWindowWidth();

  useEffect(() => {
    if (activeRef.current && containerRef.current) {
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const activeTop = activeRef.current.getBoundingClientRect().top;
      setIndicatorStyle({
        height: activeRef.current.offsetHeight,
        top: activeTop - containerTop,
      });
    }
  }, [activeId, width]);

  console.log(headings);

  return (
    <div className="sticky top-[77px] space-y-2.5">
      <div className="flex items-center gap-2">
        <AlignLeftIcon />
        <p className="text-soft-foreground text-sm">On this page</p>
      </div>
      <div className="grid grid-cols-[16px_1fr] gap-2">
        <div className="relative left-[1px] h-full">
          <div
            className="bg-border relative h-full w-0.5 rounded-full"
            ref={containerRef}
          >
            <span
              className={fuse(
                "bg-foreground absolute left-0 w-0.5 rounded-full transition-all delay-[50ms] duration-300 ease-in-out",
              )}
              style={indicatorStyle}
            />
          </div>
        </div>
        <div className="space-y-2">
          {headings.map((heading) => (
            <div key={heading.id}>
              <a
                href={`#${heading.id}`}
                ref={activeId === heading.id ? activeRef : null}
                onClick={(e) => {
                  e.preventDefault();
                  if (heading.id === "title") {
                    window.scrollTo({ top: 0 });
                  } else {
                    document.getElementById(heading.id)?.scrollIntoView({});
                  }
                  setTimeout(() => {
                    setActiveId(heading.id);
                  }, 20);
                }}
              >
                <p
                  className={fuse(
                    "text-soft-foreground text-[0.85rem] transition-colors",
                    activeId === heading.id && "text-foreground",
                    heading.level === "h3" ? "ml-3" : "",
                  )}
                >
                  {heading.text}
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AlignLeftIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-subtle-foreground size-4"
    >
      <path d="M15 12H3" />
      <path d="M17 18H3" />
      <path d="M21 6H3" />
    </svg>
  );
};
