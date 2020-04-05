module.exports = function transformaStringEmArray(arrayAsString) {
    return arrayAsString.split(",").map(tech => tech.trim());
}