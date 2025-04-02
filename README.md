# elevatorsaga-code
This is my attempt at the Elevator Saga game.
The code is kept separated from the object format imposed by the game because I like it better that way. Sue me.

## How To Use This Code

Replace the Javascript code in the input area from the Elevator Saga game with the snippet below:

    {
        init: function(elevators, floors) {
            var script = document.createElement('script');
            script.src = 'https://luigivieira.github.io/elevatorsaga-code/main.js';
            script.onload = function() {
                if (typeof window.init === 'function') {
                    window.init(elevators, floors);
                }
            };
            document.head.appendChild(script);
        },
            
        update: function(dt, elevators, floors) {
            if (typeof window.update === 'function') {
                window.update(dt, elevators, floors);
            }
        }
    }

This defines the expected object from the game with the two functions `init` and `update`, but running them from the global references defined in the `window` object
by the external script loaded from Github pages. This doesn't add any latency to the game as the game timer only starts *after* the `init` function is
completed. If the external code is too large, there might be problems with the game timing-out at initialization, but that is not the case at the moment.