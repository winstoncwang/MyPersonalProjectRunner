# MyPersonalProjectRunner
A custom project runner used to detect any changes to JS script and execute the file for rapid change and development purposes.

Challenges ahead are:

1.Need to detect when a file changes
2.Additional help made available to other users to CLI tool to clarify some features
3.Execution of multiple js code in node, or run code within our code. 

Solution:

1. We can use fs.watch, however that is not recursive and not CPU friendly. Hence we use 'chokidar' library.

2. Using full-featured framework for building command line application such as 'Caporal'

3. Using standard 'child_process' library


-------------

initiating all files and npm setting(package.json).

-------------

bug fix with the hashbang line at the top of index.js file to initiate execution path for npm link
-------------

V 0.11

    install chokidar and apply debounce function to remove multiple execution of add file trigger when code initially runs.
-------------

V 0.12

    additional debounce method added, debounce standard and promise version.
-------------

V 0.13

    lodash debounce added to user start program notification line.
-------------

V 0.14

    caporal implemented with basic features.
-------------

V 0.15

    use fsPromise.access to check file existence and throw error is necessary.