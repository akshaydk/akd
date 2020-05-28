---
name: 'n_queens'
title:  "Solution to N Queens"
date:   2020-04-23 13:08:42 +0530
categories: DS, Algo
description: |
  Although, it isn't unique solution, I am sharing it because I had fun solving the puzzle.
---

Today morning I was looking at the N-Queens problem. It has been one of those puzzles that I wanted solve
for a long time. While I going through some content on backtracking I came across this problem. So, I spent
sometime solving the puzzle today. 


Given n, the ```totalNQueens``` will return the number of ways we can place the queens.

```python
    def totalNQueens(self, n):
        R, C = n, n        
        b = [[0 for i in range(C)] for j in range(R)]
        teritories = [[[] for i in range(C)] for j in range(R)]
        
        def markTeritory(x,y):
            teritory = []
            for i in range(C):
                if b[x][i] == 0:
                    b[x][i] = 1
                    teritory.append([x,i])
            for i in range(R):
                if b[i][y] == 0:
                    b[i][y] = 1
                    teritory.append([i,y])
            i = x
            j = y
            x = x-1
            y = y-1
            while (x >= 0 and x < R) and (y >= 0 and y < C):
                if b[x][y] == 0:
                    b[x][y] = 1
                    teritory.append([x,y])                
                x = x-1
                y = y-1
            x = i+1
            y = j+1
            while (x >= 0 and x < R) and (y >= 0 and y < C):
                if b[x][y] == 0:
                    b[x][y] = 1
                    teritory.append([x,y])      
                x = x+1
                y = y+1
            x = i-1
            y = j+1
            while (x >= 0 and x < R) and (y >= 0 and y < C):
                if b[x][y] == 0:
                    b[x][y] = 1
                    teritory.append([x,y])      
                x = x-1
                y = y+1      
            x = i+1
            y = j-1
            while (x >= 0 and x < R) and (y >= 0 and y < C):
                if b[x][y] == 0:
                    b[x][y] = 1
                    teritory.append([x,y])      
                x = x+1
                y = y-1
            teritories[i][j] = teritory

        def unmarkTeritory(x,y):
            teritory = teritories[x][y]
            for i,j in teritory:
                b[i][j] = 0
                
                                                
        def backtrack(x, count):
            for y in range(C):
                if b[x][y] == 0:
                    markTeritory(x,y)
                    b[x][y] = 'Q'               
                    if x+1 == R:
                        count += 1                
                    else:
                        count = backtrack(x+1, count)                       
                    unmarkTeritory(x,y)                  
            return count
        return backtrack(0, 0)                
```

After this, I would implement a sudoku solver. 






