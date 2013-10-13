interface IStringDictionary {
    [arg: string]: string;
    (): string;
    (arg: any, arg2: string);
}
interface IEnyoLibValuePair {
    enyo: any;
    lib: string;
}
interface IenyoPath extends IStringDictionary[] {
    addPath(e: string, t: string): string;
    addPaths(e: IEnyoLibValuePair);
    includeTrailingSlash(e: string): string;
    rewrite(e: string): string;
}
declare class EnyoPath implements IenyoPath {
    public paths: {};
    public addPath(e: string, t: string): string;
    public addPaths(e: IEnyoLibValuePair): void;
    public includeTrailingSlash(e: string): string;
    public rewritePattern: RegExp;
    public rewrite(e: string): string;
    public concat(...items: IStringDictionary[]): IStringDictionary[];
    public toString(): string;
    public toLocaleString(): string;
    public join(separator?: string): string;
    public pop(): IStringDictionary;
    public push(...items: IStringDictionary[]): number;
    public reverse(): IStringDictionary[];
    public shift(): IStringDictionary;
    public slice(start: number, end?: number): IStringDictionary[];
    public sort(compareFn?: (a: IStringDictionary, b: IStringDictionary) => number): IStringDictionary[];
    public splice(start: number): IStringDictionary[];
    public unshift(...items: IStringDictionary[]): number;
    public indexOf(searchElement: IStringDictionary, fromIndex?: number): number;
    public lastIndexOf(searchElement: IStringDictionary, fromIndex?: number): number;
    public every(callbackfn: (value: IStringDictionary, index: number, array: IStringDictionary[]) => boolean, thisArg?: any): boolean;
    public some(callbackfn: (value: IStringDictionary, index: number, array: IStringDictionary[]) => boolean, thisArg?: any): boolean;
    public forEach(callbackfn: (value: IStringDictionary, index: number, array: IStringDictionary[]) => void, thisArg?: any): void;
    public map<U>(callbackfn: (value: IStringDictionary, index: number, array: IStringDictionary[]) => U, thisArg?: any): U[];
    public filter(callbackfn: (value: IStringDictionary, index: number, array: IStringDictionary[]) => boolean, thisArg?: any): IStringDictionary[];
    public reduce(callbackfn: (previousValue: IStringDictionary, currentValue: IStringDictionary, currentIndex: number, array: IStringDictionary[]) => IStringDictionary, initialValue?: IStringDictionary): IStringDictionary;
    public reduceRight(callbackfn: (previousValue: IStringDictionary, currentValue: IStringDictionary, currentIndex: number, array: IStringDictionary[]) => IStringDictionary, initialValue?: IStringDictionary): IStringDictionary;
    public length: number;
}
interface IDecodedPackage {
    manifest: any;
    alias: string;
    target: string;
    folder: string;
}
interface ILoaderFactory {
    packageName: string;
    packageFolder: string;
    verbose: boolean;
    finishCallbacks: {};
    loadScript(e);
    loadSheet(e);
    loadPackage(e);
    report();
    load();
    more(e);
    finish();
    continueBlock(e);
    require(e, t);
    getPathPrefix(e);
    requireStylesheet(e);
    requireScript(e, t);
    decodePackagePath(e: string): IDecodedPackage;
    aliasPackage(e: string);
    requirePackage(e: string, t: any);
    addPath(e: string, t: string): string;
    addPaths(e: IEnyoLibValuePair);
    includeTrailingSlash(e: string): string;
    rewrite(e: string): string;
}
interface IEnyoStatics {
    subclass(e, t);
    extend(superBase: any);
}
declare enum LoggingLevels {
    log = 20,
    warn = 10,
    error = 0,
}
interface IEnyoKind {
    makeCtor(): any;
    defaultNamespace: string;
    features: Function[];
    inherited(e: any, t: any): any;
    statics: IEnyoStatics;
}
declare class EnyoKind implements IEnyoKind {
    public defaultNamespace: string;
    public features: Function[];
    public inherited(e: any, t: any): any;
    public statics: IEnyoStatics;
    constructor(e: any);
    public makeCtor(): any;
}
interface IEnyoLogging {
    level: number;
    shouldLog(e: LoggingLevels): boolean;
    _log(e, t): void;
    log(e: LoggingLevels, t: any);
    log(e: string, args: IArguments);
    log(e: string, args: string[]);
}
interface Enyo {
    locateScript(arg: any);
    args: any;
    path: IenyoPath;
    machine: any;
    loader: any;
    runtimeLoading: any;
    locateScript(arg: string);
    kind(e: any): IEnyoKind;
    loaderFactory(e: any): ILoaderFactory;
    packages: any;
    modules: any;
    sheets: any;
    stack: any;
    manifest: any;
    more(arg: any);
    depends: any;
    logging: IEnyoLogging;
    dumbConsole: Boolean;
    isArray(arg: any): boolean;
    cloneArray(...arg: any[]): any;
    setLogLevel(e: LoggingLevels);
    log();
    warn();
    warn(arg: string);
    error();
    job: any;
    macroize: any;
    quickMacroize: any;
    singleton: any;
    makeCtor: any;
    defaultNamespace: any;
    features: any;
    inherited: any;
    statics: any;
    _kindCtors: any;
    constructorForKind: any;
    Theme: any;
    registerTheme: any;
    _objectCount: any;
    Object: any;
    defaultCtor: any;
    Component: any;
    create: any;
    createFromKind: any;
    master: any;
    nop: any;
    getCookie: any;
    setCookie: any;
    xhr: any;
    AjaxProperties: any;
    Async: any;
    _AjaxComponent: any;
    requiresWindow: any;
    dom: any;
    UiComponent: any;
    Control: any;
    platform: any;
    easing: any;
    easedLerp: any;
    $: any;
    dispatcher: any;
    bubble: any;
    bubbler: any;
    gesture: any;
    Scroller: any;
    Layout: any;
    GroupItem: any;
    ToolDecorator: any;
    Input: any;
    floatingLayer: any;
    FloatingLayer: any;
    global: any;
    indexOf: any;
    _getProp: any;
    forEach: any;
    mixin: any;
    setPrototype: any;
    instance: any;
    nar: any;
    delegate: any;
    isString: any;
    isFunction: any;
    bind: any;
    cap: any;
    cancelRequestAnimationFrame: any;
    requestAnimationFrame: any;
    now: any;
    iePreventDefault: any;
    makeBubble: any;
    clone: any;
    bodyIsFitting: any;
    remove: any;
    asyncMethod: any;
    RichText: any;
    _DragAvatar: any;
    setObject: any;
    getObject: any;
    uncap: any;
    format: any;
    map: any;
    filter: any;
    keys: any;
    irand: any;
    toArray: any;
    nob: any;
    call: any;
    Ajax: any;
    Signals: any;
    json: any;
    JsonpRequest: any;
    dispatch: any;
}
declare class enyoLoaderFactory implements ILoaderFactory {
    public packageName: string;
    public packageFolder: string;
    public verbose: boolean;
    public finishCallbacks: {};
    public context: Enyo;
    constructor(e: any, context: Enyo);
    public loadScript(e): void;
    public loadSheet(e): void;
    public loadPackage(e): void;
    public report(arg1?: any, arg2?: any): void;
    public load(): void;
    public more(e): void;
    public finish(): void;
    public continueBlock(e): boolean;
    public require(e, t): boolean;
    public getPathPrefix(e): string;
    public requireStylesheet(e): void;
    public requireScript(e, t): void;
    public decodePackagePath(e: string): IDecodedPackage;
    public aliasPackage(e): void;
    public requirePackage(e, t): void;
    public addPath(e: string, t: string): string;
    public addPaths(e: IEnyoLibValuePair): void;
    public includeTrailingSlash(e: string): string;
    public rewrite(e: string): string;
}
interface IEnyoLoaderFactorNdPath extends IenyoPath, ILoaderFactory {
}
interface Window {
    enyo: any;
    less: any;
    cordova: any;
    PhoneGap: any;
    chrome: any;
    PalmSystem: any;
    console: Console;
    XDomainRequest: XDomainRequest;
    setTimeout(t: any, num: number): number;
    clearTimeout(num: number);
    event: MSEventObj;
}
interface HTMLScriptElement {
    onLoad: any;
    onError: any;
}
interface Function {
    nom: any;
}
interface Element {
    offsetWidth: any;
    offsetHeight: any;
}
interface Console {
    groupEnd(arg: any);
}
interface Event {
    button: any;
}
