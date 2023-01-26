# List-Of-Names



https://user-images.githubusercontent.com/96992358/214935866-95a77d90-a65c-40a8-a7e7-3878e7c7ab89.mp4

    npm i yargs
    npm i chalk
    npm i figlet
    npm i clui

A program to enhance problem solving in programming and help us store our contacts list in it.


Programm Commands :
              
    1 > node main.js --help :
                            
                            Contact Manager <command> [args]

                            Commands:
                                    Contact Manager create  [create new contact]                      [aliases: c]
                                    Contact Manager list    [listing the saved contacts]              [aliases: l]
                                    Contact Manager remove  [remove contact]                          [aliases: r]

                            Options:
                                    --help     Show help                                                 [boolean]
                                    --version  Show version number                                       [boolean]
              
     2 > node main.js c --fullname "____GHOSTEPROG_____" --phone 777777 --email "GHOSTEPROG@GMAIL.COM" => | [+] Contact Saved. |
              
     3 > node main.js l :
                        Your contacts

                        ┌─────────┬───────────────────────┬────────────┬────────────────────────┐
                        │ (index) │       fullname        │   phone    │         email          │
                        ├─────────┼───────────────────────┼────────────┼────────────────────────┤
                        │    0    │     'GHOSTEPROG'      │ 9126887114 │ 'ghosteprog@gmail.com' │
                        │    1    │ 'GHOSTEPROG_._GITHUB' │  11227799  │ 'ghosteprog@gmail.com' │
                        │    2    │ '____GHOSTEPROG_____' │   777777   │ 'GHOSTEPROG@GMAIL.COM' │
                        └─────────┴───────────────────────┴────────────┴────────────────────────┘
