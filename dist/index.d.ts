import { TemplateChildNode, ElementNode, AttributeNode, DirectiveNode, ExpressionNode, SimpleExpressionNode } from '@vue/compiler-core';
declare type PropertyNode = AttributeNode | DirectiveNode;
declare const isElement: (node: TemplateChildNode) => node is ElementNode;
declare const isAttribute: (node: PropertyNode) => node is AttributeNode;
declare const isDirective: (node: PropertyNode) => node is DirectiveNode;
declare const isSimpleExpression: (node: ExpressionNode) => node is SimpleExpressionNode;
export { isElement, isAttribute, isDirective, isSimpleExpression, };
