export const capitalize = (s) => {
    if (typeof s !== 'string') return '';
    s = s.split(' ');
    s = s.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return s.join(' ');
};