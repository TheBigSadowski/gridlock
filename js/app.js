var Grid = require('./grid')
var Shape = require('./shape')

const Width = 8;
const Height = 8;

var totalCalls = 0;
var totalGridsEvaluated = 0;
for (var left = 0; left < Width; ++left)
    for (var right = left; right < Width; ++right)
        for (var bottom = 0; bottom < Height; ++bottom)
            for (var top = bottom; top < Height; ++top)
            {
                var grid = new Grid(left, right, bottom, top);
                var shape = recognize(grid);
                totalCalls += grid.totalCalls;
                ++totalGridsEvaluated;

                var gridIsSquare = (right - left == top - bottom);

                if (shape == Shape.Square)
                {
                    if (!gridIsSquare)
                        throw "Square was incorrectly recognized.";
                }
                else
                {
                    if (gridIsSquare)
                        throw "Rectangle was incorrectly recognized.";
                }
            }
console.log("Looked at " + totalGridsEvaluated + " grids.");
console.log("Called CountBlocksSet " + totalCalls + " times.");
console.log("Average calls per grid " + totalCalls / totalGridsEvaluated);



function recognize(grid) {
    // implement this!
    return Shape.square
    return Shape.rectangle
}