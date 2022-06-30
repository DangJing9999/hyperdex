const helper = {
    isArray: function (array) {
        return Object.prototype.toString.call(array) === '[object Array]' && array.length;
    }
};

export default helper;