import { INSERT_AUDIO_COMMAND } from "./index";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useRef } from "react";

function useAudioDialog({
  inputRef,
}: {
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
}) {
  return () => {
    inputRef.current?.click();
  };
}

function useAudioUpload(
  inputRef: React.MutableRefObject<HTMLInputElement | null>,
  onSubmit: (url: string) => void
) {
  return () => {
    if (inputRef.current?.files && inputRef.current.files.length !== 0) {
      const file = inputRef.current.files[0];
      const url = URL.createObjectURL(file);

      inputRef.current.files = null;
      if (url) {
        onSubmit(url);
      }
    }
  };
}

export function AudioAdditionButton() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [editor] = useLexicalComposerContext();
  const insertAudio = (url: string) => {
    editor.dispatchCommand(INSERT_AUDIO_COMMAND, url);
  };
  const handleUploading = useAudioUpload(inputRef, insertAudio);

  const showDialog = useAudioDialog({ inputRef });
  return (
    <>
      <input
        onChange={handleUploading}
        hidden={true}
        ref={inputRef}
        type="file"
      />
      <button onClick={showDialog}>Add audio</button>
    </>
  );
}
