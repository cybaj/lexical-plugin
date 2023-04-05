import { EditorConfig, LexicalEditor } from "lexical";
import { EmoticonNode } from "../plugins/EmoticonPlugin/node";
import { VideoNode } from "../plugins/VideoPlugin/node";
import { AudioNode } from "../plugins/AudioPlugin/node";
import { initialTheme } from "../theme";

export const initialConfig = {
  namespace: "TH",
  onError: (error: Error, editor: LexicalEditor) => {
    console.error(error);
    console.debug(editor);
  },
  theme: initialTheme,
  nodes: [EmoticonNode, VideoNode, AudioNode],
} as EditorConfig extends {
  onError: (error: Error, editor: LexicalEditor) => void;
}
  ? EditorConfig
  : never;
