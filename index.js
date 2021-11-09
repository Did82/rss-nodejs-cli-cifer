function getValue(flag) {
    const flagIndex = process.argv.indexOf(flag);
    return flagIndex !== -1 ? process.argv[flagIndex + 1] : null;
}

const message = getValue('-c');
console.log(process.argv)
console.log(message);
