import { LexicalCommand, createCommand } from "lexical";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useEffect } from "react";
import { $createAudioNode } from "./node";
import { $insertNodes } from "lexical";

// Create a custom command with a typed payload.
type CommandPayload = string;
export const INSERT_AUDIO_COMMAND: LexicalCommand<CommandPayload> =
  createCommand("INSERT_AUDIO_COMMAND");

export default function AudioPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    // Similar with command listener, which returns unlisten callback
    const removeListener = editor.registerCommand(
      INSERT_AUDIO_COMMAND,
      (payload) => {
        // Adding custom command that will be handled by this plugin
        editor.update(() => {
          $insertNodes([$createAudioNode(payload)]);
        });

        // Returning true indicates that command is handled and no further propagation is required
        return true;
      },
      0
    );

    return () => {
      removeListener();
    };
  }, [editor]);

  return null;
}
