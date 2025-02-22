function islandPerimeter(grid: number[][]): number {
    const rows = grid.length;
    const cols = grid[0].length;
    let perimeter = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) {
                perimeter += 4; // Start with 4 sides
                
                // Check above
                if (i > 0 && grid[i - 1][j] === 1) {
                    perimeter -= 2; // Shared edge with the cell above
                }
                
                // Check left
                if (j > 0 && grid[i][j - 1] === 1) {
                    perimeter -= 2; // Shared edge with the cell to the left
                }
            }
        }
    }

    return perimeter;
};