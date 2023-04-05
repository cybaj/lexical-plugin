import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { THContentEditable } from "../../editable";
import { Placeholder } from "./placeholder";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";

export const THPlainTextPlugin = () => {
  return (
    <PlainTextPlugin
      contentEditable={<THContentEditable />}
      placeholder={<Placeholder />}
      ErrorBoundary={LexicalErrorBoundary}
    ></PlainTextPlugin>
  );
};
