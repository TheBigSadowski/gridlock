using System;

namespace Stealth.Interview.Blocks
{
    class Grid : IGrid
    {
        readonly int _left;
        readonly int _right;
        readonly int _bottom;
        readonly int _top;

        public int TotalCalls;

        public Grid(int left, int right, int bottom, int top)
        {
            _left = left;
            _right = right;
            _bottom = bottom;
            _top = top;
        }

        public int CountBlocksSet(int x1, int x2, int y1, int y2)
        {
            ++TotalCalls;
            int intersectRight = Math.Min(x2, _right);
            int intersectLeft = Math.Max(x1, _left);
            int intersectTop = Math.Min(y2, _top);
            int intersectBottom = Math.Max(y1, _bottom);

            if (intersectRight < intersectLeft)
                return 0;
            if (intersectTop < intersectBottom)
                return 0;

            return (intersectRight - intersectLeft + 1) * (intersectTop - intersectBottom + 1);
        }
    }
}