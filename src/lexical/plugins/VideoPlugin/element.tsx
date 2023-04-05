import { INSERT_VIDEO_COMMAND } from "./index";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useRef } from "react";

function useVideoDialog({
  inputRef,
}: {
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
}) {
  return () => {
    inputRef.current?.click();
  };
}

function useVideoUpload(
  inputRef: React.MutableRefObject<HTMLInputElement | null>,
  onSubmit: (url: string) => void
) {
  return () => {
    if (inputRef.current?.files && inputRef.current.files.length !== 0) {
      const file = inputRef.current.files[0];
      const url = URL.createObjectURL(file);

      if (url) {
        onSubmit(url);
      }
    }
  };
}

export function VideoAdditionButton() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [editor] = useLexicalComposerContext();
  const insertVideo = (url: string) => {
    editor.dispatchCommand(INSERT_VIDEO_COMMAND, url);
  };
  const handleUploading = useVideoUpload(inputRef, insertVideo);

  const showDialog = useVideoDialog({ inputRef });
  return (
    <>
      <input
        onChange={handleUploading}
        hidden={true}
        ref={inputRef}
        type="file"
      />
      <button onClick={showDialog}>Add video</button>
    </>
  );
}
