import { ReactNode } from "react";
import { DecoratorNode, NodeKey } from "lexical";

export class ToolbarNode extends DecoratorNode<ReactNode> {
  static getType(): string {
    return "toolbar";
  }

  static clone(node: ToolbarNode): ToolbarNode {
    return new ToolbarNode(node.__key);
  }

  constructor(key?: NodeKey) {
    super(key);
  }
}
