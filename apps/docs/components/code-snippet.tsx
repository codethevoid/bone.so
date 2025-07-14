import { Highlight, themes } from "prism-react-renderer";
import { fuse } from "@bonekit/ui/utils";
import { CopyButton } from "./copy-button";

export const CodeSnippet = ({
  code,
  filename,
  language = "tsx",
  showLines = false,
}: {
  filename?: string;
  code: string;
  language?: string;
  showLines?: boolean;
}) => {
  return (
    <>
      <div className={fuse("mt-6 overflow-hidden rounded-lg border")}>
        {filename && (
          <div className="text-soft-foreground flex items-center justify-between border-b bg-zinc-500/5 px-3 py-1 font-mono text-xs dark:bg-zinc-500/10">
            <span>{filename}</span>
            <CopyButton text={code} />
          </div>
        )}
        <div className="hidden overflow-x-auto dark:block">
          <Highlight theme={themes.nightOwl} code={code} language={language}>
            {({ style, tokens, getLineProps, getTokenProps }) => (
              <pre
                style={style}
                className="!bg-transparent p-3 font-mono text-[0.775rem]"
              >
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })}>
                    {showLines && (
                      <span className="pr-4 font-mono text-zinc-600">
                        {(i + 1).toString().padStart(2, "0")}
                      </span>
                    )}
                    {line.map((token, key) => {
                      return <span key={key} {...getTokenProps({ token })} />;
                    })}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </div>
        <div className="overflow-x-auto dark:hidden">
          <Highlight
            theme={themes.nightOwlLight}
            code={code}
            language={language}
          >
            {({ style, tokens, getLineProps, getTokenProps }) => (
              <pre
                style={style}
                className="!bg-transparent p-3 font-mono text-[0.775rem]"
              >
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })}>
                    {showLines && (
                      <span className="pr-4 font-mono text-zinc-400">
                        {(i + 1).toString().padStart(2, "0")}
                      </span>
                    )}
                    {line.map((token, key) => {
                      return <span key={key} {...getTokenProps({ token })} />;
                    })}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </div>
      </div>
    </>
  );
};
