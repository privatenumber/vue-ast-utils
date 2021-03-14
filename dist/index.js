const isElement = (node) => ((node === null || node === void 0 ? void 0 : node.type) === 1 /* ELEMENT */);
const isAttribute = (node) => ((node === null || node === void 0 ? void 0 : node.type) === 6 /* ATTRIBUTE */);
const isDirective = (node) => ((node === null || node === void 0 ? void 0 : node.type) === 7 /* DIRECTIVE */);
const isSimpleExpression = (node) => ((node === null || node === void 0 ? void 0 : node.type) === 4 /* SIMPLE_EXPRESSION */);
export { isElement, isAttribute, isDirective, isSimpleExpression, };
