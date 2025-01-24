This repository demonstrates a subtle bug in React Router v6 when working with nested routes and relative paths.  The problem occurs when navigating between components where the path is not explicitly defined for each component in the Routes tag.  This leads to unexpected behavior and error messages.

The bug.js file shows the buggy implementation, while bugSolution.js provides the corrected code.

The issue becomes more apparent when dealing with more complex route structures, making it an easily overlooked error.  This example provides a simple, reproducible case to highlight this unexpected behavior.

The solution involves explicitly defining the path for every route component.