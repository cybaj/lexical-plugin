import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { initialConfig } from "./config";
import AudioPlugin from "./plugins/AudioPlugin";
import { AudioAdditionButton } from "./plugins/AudioPlugin/element";
import EmoticonPlugin from "./plugins/EmoticonPlugin";
import { THPlainTextPlugin } from "./plugins/PlainText";
import VideoPlugin from "./plugins/VideoPlugin";
import { VideoAdditionButton } from "./plugins/VideoPlugin/element";
import "./styles.css";

export const THEditor = () => {
  return (
    <LexicalComposer initialConfig={initialConfig}>
      <THPlainTextPlugin />
      <EmoticonPlugin />
      <VideoPlugin />
      <AudioPlugin />
      <div style={{ display: "flex", justifyContent: "start" }}>
        <VideoAdditionButton />
        <AudioAdditionButton />
      </div>
    </LexicalComposer>
  );
};
