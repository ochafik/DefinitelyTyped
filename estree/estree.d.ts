// Type definitions for ESTree AST specification
// Project: https://github.com/estree/estree
// Definitions by: RReverser <https://github.com/RReverser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// https://github.com/estree/estree/blob/master/es6.md#classdeclaration
declare namespace ESTreeUnion {

  type Class = ClassDeclaration | ClassExpression;

  type Function = ArrowFunctionExpression
  | FunctionDeclaration
  | FunctionExpression;

  type Expression = ArrayExpression
  | ArrayPattern
  | ArrowFunctionExpression
  | AssignmentExpression
  | AssignmentPattern
  | BinaryExpression
  | CallExpression
  | ClassExpression
  | ConditionalExpression
  | FunctionExpression
  | Identifier
  | Identifier
  | Literal
  | LogicalExpression
  | MemberExpression
  | MemberExpression
  | MetaProperty
  | NewExpression
  | ObjectExpression
  | ObjectPattern
  | RegExpLiteral
  | RestElement
  | SequenceExpression
  | TaggedTemplateExpression
  | TemplateLiteral
  | ThisExpression
  | UnaryExpression
  | UpdateExpression
  | YieldExpression;

  type Property = SimpleProperty | AssignmentProperty

  type ModuleDeclaration = ExportAllDeclaration
  | ExportDefaultDeclaration
  | ExportNamedDeclaration
  | ImportDeclaration;

  type ModuleSpecifier = ImportSpecifier
  | ExportSpecifier
  | ImportDefaultSpecifier
  | ImportNamespaceSpecifier;

  type Declaration = ClassDeclaration
  | ExportAllDeclaration
  | ExportDefaultDeclaration
  | ExportNamedDeclaration
  | FunctionDeclaration
  | ImportDeclaration
  | ModuleDeclaration
  | VariableDeclaration;

  type Statement = Declaration
  | BlockStatement
  | BreakStatement
  | ContinueStatement
  | DebuggerStatement
  | DoWhileStatement
  | EmptyStatement
  | ExpressionStatement
  | ForInStatement
  | ForOfStatement
  | ForStatement
  | IfStatement
  | LabeledStatement
  | ReturnStatement
  | SwitchStatement
  | ThrowStatement
  | TryStatement
  | WhileStatement
  | WithStatement;

  type Pattern = ArrayPattern
  | AssignmentPattern
  | Identifier
  | MemberExpression
  | ObjectPattern
  | RestElement;

  type Node = Expression
  | Declaration
  | Statement
  | Pattern
  | Property
  | SpreadElement
  | CatchClause
  | Class
  | ClassBody
  | ModuleDeclaration
  | ModuleSpecifier
  | Function
  | MetaProperty
  | MethodDefinition
  | Program
  | Super
  | SwitchCase
  | TemplateElement
  | TemplateLiteral
  | VariableDeclarator;

  interface BaseNode extends SourceLocation {
    type: string;
    // loc?: SourceLocation;
    range?: [number, number];
  }

  interface SourceLocation {
    // source?: string;
    start: Position | number;
    end: Position | number;
  }

  interface Position {
    line: number;
    column: number;
  }

  interface Program extends BaseNode {
    type: "Program"
    body: Array<Statement | ModuleDeclaration>;
    sourceType: string;
  }

  interface BaseFunction {
    id?: Identifier;
    params: Array<Pattern>;
    body: BlockStatement | Expression;
    generator: boolean;
  }

  interface EmptyStatement extends BaseNode {
    type: "EmptyStatement"
  }

  interface BlockStatement extends BaseNode {
    type: "BlockStatement"
    body: Array<Statement>;
  }

  interface ExpressionStatement extends BaseNode {
    type: "ExpressionStatement"
    expression: Expression;
  }

  interface IfStatement extends BaseNode {
    type: "IfStatement"
    test: Expression;
    consequent: Statement;
    alternate?: Statement;
  }

  interface LabeledStatement extends BaseNode {
    type: "LabeledStatement"
    label: Identifier;
    body: Statement;
  }

  interface BreakStatement extends BaseNode {
    type: "BreakStatement"
    label?: Identifier;
  }

  interface ContinueStatement extends BaseNode {
    type: "ContinueStatement"
    label?: Identifier;
  }

  interface WithStatement extends BaseNode {
    type: "WithStatement"
    object: Expression;
    body: Statement;
  }

  interface SwitchStatement extends BaseNode {
    type: "SwitchStatement"
    discriminant: Expression;
    cases: Array<SwitchCase>;
  }

  interface ReturnStatement extends BaseNode {
    type: "ReturnStatement"
    argument?: Expression;
  }

  interface ThrowStatement extends BaseNode {
    type: "ThrowStatement"
    argument: Expression;
  }

  interface TryStatement extends BaseNode {
    type: "TryStatement"
    block: BlockStatement;
    handler?: CatchClause;
    finalizer?: BlockStatement;
  }

  interface WhileStatement extends BaseNode {
    type: "WhileStatement"
    test: Expression;
    body: Statement;
  }

  interface DoWhileStatement extends BaseNode {
    type: "DoWhileStatement"
    body: Statement;
    test: Expression;
  }

  interface ForStatement extends BaseNode {
    type: "ForStatement"
    init?: VariableDeclaration | Expression;
    test?: Expression;
    update?: Expression;
    body: Statement;
  }

  interface ForInStatement extends BaseNode {
    type: "ForInStatement"
    left: VariableDeclaration | Expression;
    right: Expression;
    body: Statement;
  }

  interface DebuggerStatement extends BaseNode {
    type: "DebuggerStatement"
  }

  interface FunctionDeclaration extends BaseNode, BaseFunction {
    type: "FunctionDeclaration"
    id: Identifier;
  }

  interface VariableDeclaration extends BaseNode {
    type: "VariableDeclaration"
    declarations: Array<VariableDeclarator>;
    kind: string;
  }

  interface VariableDeclarator extends BaseNode {
    type: "VariableDeclarator"
    id: Pattern;
    init?: Expression;
  }

  interface ThisExpression extends BaseNode {
    type: "ThisExpression"
  }

  interface ArrayExpression extends BaseNode {
    type: "ArrayExpression"
    elements: Array<Expression | SpreadElement>;
  }

  interface ObjectExpression extends BaseNode {
    type: "ObjectExpression"
    properties: Array<Property>;
  }

  interface BaseProperty {
    key: Expression;
    value: Expression;
    kind?: string;
    method: boolean;
    shorthand: boolean;
    computed: boolean;
  }

  // Deviates from spec.
  interface SimpleProperty extends BaseNode, BaseProperty {
    type: "Property"
    kind: undefined
  }

  interface FunctionExpression extends BaseNode, BaseFunction {
    type: "FunctionExpression"
    expression?: boolean // acorn adds an `expression: false`
  }

  interface SequenceExpression extends BaseNode {
    type: "SequenceExpression"
    expressions: Array<Expression>;
  }

  interface UnaryExpression extends BaseNode {
    type: "UnaryExpression"
    operator: UnaryOperator;
    prefix: boolean;
    argument: Expression;
  }

  interface BinaryExpression extends BaseNode {
    type: "BinaryExpression"
    operator: BinaryOperator;
    left: Expression;
    right: Expression;
  }

  interface AssignmentExpression extends BaseNode {
    type: "AssignmentExpression"
    operator: AssignmentOperator;
    left: Pattern | MemberExpression;
    right: Expression;
  }

  interface UpdateExpression extends BaseNode {
    type: "UpdateExpression"
    operator: UpdateOperator;
    argument: Expression;
    prefix: boolean;
  }

  interface LogicalExpression extends BaseNode {
    type: "LogicalExpression"
    operator: LogicalOperator;
    left: Expression;
    right: Expression;
  }

  interface ConditionalExpression extends BaseNode {
    type: "ConditionalExpression"
    test: Expression;
    alternate: Expression;
    consequent: Expression;
  }

  interface BaseCallExpression {
    callee: Expression | Super;
    arguments: Array<Expression | SpreadElement>;
  }

  interface CallExpression extends BaseNode, BaseCallExpression {
    type: "CallExpression"
    callee: Expression | Super;
    arguments: Array<Expression | SpreadElement>;
  }

  interface NewExpression extends BaseNode, BaseCallExpression {
    type: "NewExpression"
  }

  interface MemberExpression extends BaseNode {
    type: "MemberExpression"
    object: Expression | Super;
    property: Expression;
    computed: boolean;
  }

  interface SwitchCase extends BaseNode {
    type: "SwitchCase"
    test?: Expression;
    consequent: Array<Statement>;
  }

  interface CatchClause extends BaseNode {
    type: "CatchClause"
    param: Pattern;
    body: BlockStatement;
  }

  interface Identifier extends BaseNode {
    type: "Identifier"
    name: string;
  }

  interface Literal extends BaseNode {
    type: "Literal"
    value: string | boolean | number;
    raw?: string; // acorn for boolean literal at least?
  }

  interface RegExpLiteral extends BaseNode {
    type: "RegExpLiteral"
    value: RegExp;
    regex: {
      pattern: string;
      flags: string;
    };
  }

  type UnaryOperator = "-" | "+" | "!" | "~" | "typeof" | "void" | "delete";

  type BinaryOperator = "==" | "!=" | "===" | "!=="
  | "<" | "<=" | ">" | ">="
  | "<<" | ">>" | ">>>"
  | "+" | "-" | "*" | "/" | "%"
  | "|" | "^" | "&" | "in"
  | "instanceof"
  | "**";

  type LogicalOperator = "||" | "&&";

  type AssignmentOperator = "=" | "+=" | "-=" | "*=" | "/=" | "%="
  | "<<=" | ">>=" | ">>>="
  | "|=" | "^=" | "&="
  | "**=";

  type UpdateOperator = "++" | "--";

  interface ForOfStatement extends BaseNode {
    type: "ForOfStatement"
    left: VariableDeclaration | Expression;
    right: Expression;
    body: Statement;
  }

  interface Super extends BaseNode {
    type: "Super"
  }

  interface SpreadElement extends BaseNode {
    type: "SpreadElement"
    argument: Expression;
  }

  interface ArrowFunctionExpression extends BaseNode, BaseFunction {
    type: "ArrowFunctionExpression"
    expression: boolean;
  }

  interface YieldExpression extends BaseNode {
    type: "YieldExpression"
    argument?: Expression;
    delegate: boolean;
  }

  interface TemplateLiteral extends BaseNode {
    type: "TemplateLiteral"
    quasis: Array<TemplateElement>;
    expressions: Array<Expression>;
  }

  interface TaggedTemplateExpression extends BaseNode {
    type: "TaggedTemplateExpression"
    tag: Expression;
    quasi: TemplateLiteral;
  }

  interface TemplateElement extends BaseNode {
    type: "TemplateElement"
    tail: boolean;
    value: {
      cooked: string;
      raw: string;
    };
  }

  interface AssignmentProperty extends BaseNode, BaseProperty {
    type: "Property"
    value: Pattern;
    kind: "init";
    method: boolean;
  }

  interface ObjectPattern extends BaseNode {
    type: "ObjectPattern"
    properties: Array<AssignmentProperty>;
  }

  interface ArrayPattern extends BaseNode {
    type: "ArrayPattern"
    elements: Array<Pattern>;
  }

  interface RestElement extends BaseNode {
    type: "RestElement"
    argument: Pattern;
  }

  interface AssignmentPattern extends BaseNode {
    type: "AssignmentPattern"
    left: Pattern;
    right: Expression;
  }

  interface ClassBody extends BaseNode {
    type: "ClassBody"
    body: Array<MethodDefinition>;
  }

  interface MethodDefinition extends BaseNode {
    type: "MethodDefinition"
    key: Expression;
    value: FunctionExpression;
    kind: string;
    computed: boolean;
    static: boolean;
  }

  interface ClassDeclaration extends BaseNode {
    type: "ClassDeclaration"
    id: Identifier;
    superClass: Expression;
    body: ClassBody;
  }

  interface ClassExpression extends BaseNode {
    type: "ClassExpression"
    superClass: Expression;
    body: ClassBody;
  }

  interface MetaProperty extends BaseNode {
    type: "MetaProperty"
    meta: Identifier;
    property: Identifier;
  }

  interface BaseModuleSpecifier {
    local: Identifier;
  }

  interface ImportDeclaration extends BaseNode {
    type: "ImportDeclaration"
    specifiers: Array<ImportSpecifier | ImportDefaultSpecifier | ImportNamespaceSpecifier>;
    source: Literal;
  }

  interface ImportSpecifier extends BaseNode, BaseModuleSpecifier {
    type: "ImportSpecifier"
    imported: Identifier;
  }

  interface ImportDefaultSpecifier extends BaseNode, BaseModuleSpecifier {
    type: "ImportDefaultSpecifier"
  }

  interface ImportNamespaceSpecifier extends BaseNode, BaseModuleSpecifier {
    type: "ImportNamespaceSpecifier"
  }

  interface ExportNamedDeclaration extends BaseNode {
    type: "ExportNamedDeclaration"
    declaration?: Declaration;
    specifiers: Array<ExportSpecifier>;
    source?: Literal;
  }

  interface ExportSpecifier extends BaseNode, BaseModuleSpecifier {
    type: "ExportSpecifier"
    exported: Identifier;
  }

  interface ExportDefaultDeclaration extends BaseNode {
    type: "ExportDefaultDeclaration"
    declaration: Declaration | Expression;
  }

  interface ExportAllDeclaration extends BaseNode {
    type: "ExportAllDeclaration"
    source: Literal;
  }
}
