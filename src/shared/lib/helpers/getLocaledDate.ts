export const getLocaledDate = (value: string): string => {
    if (!value) {
        return '';
    }

    return new Date(value).toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).replace(' г.', '');
};
