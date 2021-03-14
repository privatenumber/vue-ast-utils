import {
	TemplateChildNode,
	ElementNode,
	NodeTypes,
	AttributeNode,
	DirectiveNode,
	ExpressionNode,
	SimpleExpressionNode,
} from '@vue/compiler-core';

type PropertyNode = AttributeNode | DirectiveNode;

const isElement = (
	node: TemplateChildNode,
): node is ElementNode => (node?.type === NodeTypes.ELEMENT);

const isAttribute = (
	node: PropertyNode,
): node is AttributeNode => (node?.type === NodeTypes.ATTRIBUTE);

const isDirective = (
	node: PropertyNode,
): node is DirectiveNode => (node?.type === NodeTypes.DIRECTIVE);

const isSimpleExpression = (
	node: ExpressionNode,
): node is SimpleExpressionNode => (node?.type === NodeTypes.SIMPLE_EXPRESSION);

export {
	isElement,
	isAttribute,
	isDirective,
	isSimpleExpression,
};
