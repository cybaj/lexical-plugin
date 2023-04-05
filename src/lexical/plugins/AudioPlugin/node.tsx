import {
  NodeKey,
  EditorConfig,
  LexicalEditor,
  LexicalNode,
  DecoratorNode,
} from "lexical";
import { ReactNode } from "react";

export class AudioNode extends DecoratorNode<ReactNode> {
  __url: string;
  __caption: string;

  static getType(): string {
    return "audio";
  }

  static clone(node: AudioNode): AudioNode {
    return new AudioNode(node.__url, node.__key);
  }

  constructor(url: string, key?: NodeKey) {
    super(key);
    this.__url = url;
    this.__caption = "test audio";
  }

  createDOM(config: EditorConfig): HTMLElement {
    const div = document.createElement("div");
    div.style.display = "contents";
    return div;
  }

  updateDOM(): false {
    return false;
  }

  setURL(url: string): void {
    const writable = this.getWritable();
    writable.__url = url;
  }

  decorate(editor: LexicalEditor): ReactNode {
    return (
      <figure>
        <figcaption>{this.__caption}</figcaption>
        <audio controls src={this.__url} />
      </figure>
    );
  }
}

export function $createAudioNode(url: string): AudioNode {
  return new AudioNode(url);
}

export function $isAudioNode(node: LexicalNode): boolean {
  return node instanceof AudioNode;
}
