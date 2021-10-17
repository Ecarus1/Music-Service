// https://css-tricks.com/snippets/javascript/loop-queryselectorall-matches/
export function iterateEls<T>(list: NodeListOf<Element>, callback: (item: T) => void): void {
    [].forEach.call(list, callback);
}
