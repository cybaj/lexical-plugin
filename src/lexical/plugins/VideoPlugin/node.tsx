import {
  NodeKey,
  EditorConfig,
  LexicalEditor,
  LexicalNode,
  DecoratorNode,
} from "lexical";
import { ReactNode } from "react";

export class VideoNode extends DecoratorNode<ReactNode> {
  __url: string;

  static getType(): string {
    return "video";
  }

  static clone(node: VideoNode): VideoNode {
    return new VideoNode(node.__url, node.__key);
  }

  constructor(url: string, key?: NodeKey) {
    super(key);
    this.__url = url;
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
      <video controls>
        <source src={this.__url}></source>
      </video>
    );
  }
}

export function $createVideoNode(url: string): VideoNode {
  return new VideoNode(url);
}

export function $isVideoNode(node: LexicalNode): boolean {
  return node instanceof VideoNode;
}
