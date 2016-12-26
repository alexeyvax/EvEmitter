# EvEmitter-alexeyvax

EvEmitter is a realization Event Emitter on syntax ES2015.
Emitter used to link multiple files.

## Installation

    npm install --save evemitter-alexeyvax

## Example

    // first file 'createEmitter.js'
    import EventEmitter from 'evemitter-alexeyvax';
    
    // create new emitter
    const emitter = new EventEmitter();
    
    // add listener in storage
    emitter.addListener( 'anyNamelistener', ( item ) =>
    {
        console.log( item );
    });
    
    // remove listener from storage
    emitter.removeListener( 'anyNamelistener' );
    
    export {
        emitter
    }
    
    **********
    
    // another file
    
    import emitter from 'createEmitter.js';
    
    // transfers changes all listeners
    emitter.emit( 'anyNamelistener', item );
    