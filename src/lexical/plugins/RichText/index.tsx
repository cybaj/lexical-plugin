import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { THContentEditable } from "../../editable";
import { Placeholder } from "./placeholder";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";

export const THRichTextPlugin = () => {
  return (
    <RichTextPlugin
      contentEditable={<THContentEditable />}
      placeholder={<Placeholder />}
      ErrorBoundary={LexicalErrorBoundary}
    ></RichTextPlugin>
  );
};
