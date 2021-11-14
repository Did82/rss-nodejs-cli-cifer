const getDuplicates = (array) => new Set(array).size !== array.length;

module.exports = getDuplicates;
