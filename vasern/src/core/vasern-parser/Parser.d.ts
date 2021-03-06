export type RawObject = {
    id: number;
    raw: string;
}

export type Schema = {
    name: string;
    props: any;
}

export type ActionValues = {
    input: any;
    update: any;
    remove: any;
}

type Parser = {
    parseValue(inputType: string, value: string): any;

    parse(lines: string[], schema: any): { data: string };

    strToObject(schema: any, rawObject: RawObject): RawObject;

    schemify(line: string): Schema;

    stringify(schema: Schema, data: any[]): string;

    convertToSave(schema: Schema, data: any[]): string[];

    convertToLog(schema: Schema, actions: ActionValues): string[];

    objToStr(props: any, obj: any): string;

    valueTypeToStr(dataType: string, value: any): string;
}

export default Parser;