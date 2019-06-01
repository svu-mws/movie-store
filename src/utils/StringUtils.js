export const capitalize = (s) => {
    if (typeof s !== 'string') return '';
    return s.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};