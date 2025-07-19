import { fuse } from "@bonekit/ui/utils";
import { Fragment } from "react";

type Props = {
  head: string[];
  rows: string[][];
};

const formatPipeText = (text: string) => {
  if (!text.includes("|")) return text;

  return text.split("|").map((part, index, arr) => (
    <Fragment key={part}>
      {index > 0 && (
        <span className="mx-1 text-[#111111] dark:text-[#C792EA]">|</span>
      )}
      <span>{part.trim()}</span>
    </Fragment>
  ));
};

export const Table = ({ head, rows }: Props) => {
  return (
    <table className="mt-6 w-full table-auto border-separate border-spacing-0 rounded-lg border">
      <thead>
        <tr>
          {head.map((h, i) => (
            <th
              key={h}
              className={fuse(
                "border-b bg-zinc-500/5 px-3 py-2 text-left text-sm font-medium dark:bg-zinc-500/10",
                i === 0 && "rounded-tl-lg",
                i === head.length - 1 && "rounded-tr-lg",
              )}
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, rowIndex) => (
          <tr key={r[0]}>
            {r.map((cell, cellIndex) => (
              <td
                key={cell}
                className={fuse(
                  "px-3 py-2 text-left font-mono text-[0.815rem] tracking-tight",
                  cellIndex === 0
                    ? "text-[#4876D6] dark:text-[#ADDB67]"
                    : "text-[#994CC3] dark:text-[#7FDBCA]",
                  rowIndex !== rows.length - 1 && "border-b",
                  rowIndex === rows.length - 1 &&
                    cellIndex === 0 &&
                    "rounded-bl-lg",
                  rowIndex === rows.length - 1 &&
                    cellIndex === head.length - 1 &&
                    "rounded-br-lg",
                  cell === "undefined" &&
                    "text-soft-foreground dark:text-soft-foreground opacity-80",
                )}
              >
                {cellIndex === 1 ? formatPipeText(cell) : cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
