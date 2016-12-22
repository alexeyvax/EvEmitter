# EvEmitter-alexeyvax

EvEmitter is a realization Event Emitter on syntax ES2015.
Emitter used to link multiple files.

## Installation

    npm install EvEmitter

## Example

    import EventEmitter from 'evemitter-alexeyvax';
    
    // create new emitter
    const emitter = new EventEmitter();
    
    // add listener in storage
    emitter.addListener( 'addBook', ( item ) =>
    {
        console.log( item );
    });
    
    // remove listener from storage
    emitter.removeListener( 'addBook' );
    
    **********
    
    // another file
    
    // transfers changes all listeners
    emitter.emit( 'addBook', item );