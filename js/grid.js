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

        // public Grid(int left, int right, int bottom, int top)
        // {
        //     _left = left;
        //     _right = right;
        //     _bottom = bottom;
        //     _top = top;
        // }

        // public int CountBlocksSet(int x1, int x2, int y1, int y2)
        // {
        //     ++TotalCalls;
        //     int intersectRight = Math.Min(x2, _right);
        //     int intersectLeft = Math.Max(x1, _left);
        //     int intersectTop = Math.Min(y2, _top);
        //     int intersectBottom = Math.Max(y1, _bottom);

        //     if (intersectRight < intersectLeft)
        //         return 0;
        //     if (intersectTop < intersectBottom)
        //         return 0;

        //     return (intersectRight - intersectLeft + 1) * (intersectTop - intersectBottom + 1);
        // }
