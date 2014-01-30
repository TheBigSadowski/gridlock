module.exports = function(left, right, bottom, top) {
    var totalCalls = 0;

    return {
        totalCalls: function() {
            return totalCalls;
        },
        countBlocksSet: function (x1, x2, y1, y2) {
            ++totalCalls;
            var intersectRight = Math.min(x2, right);
            var intersectLeft = Math.max(x1, left);
            var intersectTop = Math.min(y2, top);
            var intersectBottom = Math.max(y1, bottom);

            if (intersectRight < intersectLeft)
                return 0;
            if (intersectTop < intersectBottom)
                return 0;

            return (intersectRight - intersectLeft + 1) * (intersectTop - intersectBottom + 1);
        }
    };
};
