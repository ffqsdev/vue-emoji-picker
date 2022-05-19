import Vue from 'vue';
declare type Data = {
    display: {
        x: number;
        y: number;
        visible: boolean;
    };
};
declare const _default: import("vue/types/vue").ExtendedVue<Vue, Data, {
    insert(emoji: string): void;
    toggle(e: MouseEvent): void;
    hide(): void;
    escape(e: KeyboardEvent): void;
}, {
    emojis: Record<string, Record<string, string>>;
}, {
    search: string;
    emojiTable: Record<string, Record<string, string>>;
}>;
export default _default;
