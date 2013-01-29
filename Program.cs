using System;

namespace Stealth.Interview.Blocks
{
    class Program
    {
        const int Width = 8;
        const int Height = 8;

        static void Main()
        {
            int totalCalls = 0;
            int totalGridsEvaluated = 0;
            for (int left = 0; left < Width; ++left)
                for (int right = left; right < Width; ++right)
                    for (int bottom = 0; bottom < Height; ++bottom)
                        for (int top = bottom; top < Height; ++top)
                        {
                            Grid grid = new Grid(left, right, bottom, top);
                            Shape shape = Recognize(grid);
                            totalCalls += grid.TotalCalls;
                            ++totalGridsEvaluated;

                            bool gridIsSquare = (right - left == top - bottom);

                            if (shape == Shape.Square)
                            {
                                if (!gridIsSquare)
                                    throw new Exception("Square was incorrectly recognized.");
                            }
                            else
                            {
                                if (gridIsSquare)
                                    throw new Exception("Rectangle was incorrectly recognized.");
                            }
                        }
            Console.WriteLine("Looked at " + totalGridsEvaluated + " grids.");
            Console.WriteLine("Called CountBlocksSet " + totalCalls + " times.");
            Console.WriteLine("Average calls per grid " + (double)totalCalls / (double)totalGridsEvaluated);
        }

        static Shape Recognize(IGrid grid)
        {
            // Implement this.
        }
    }
}
