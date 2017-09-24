export function selectBook(book) {
    //SelectBook is an action Creator which returns an action.
    return {
        type: 'BOOK_SELECTED',
        payload: book,
    };
}