/**
 * Реализация EventEmitter
 * 
 * @method addListener adds the listener and lets him listen to all subscribers
 * @param label the name listener
 * @param callback
 *
 * @method removeListener remove listener
 * @param label the name listener
 *
 * @method emit transfers changes all listeners
 * @param label the name listener
 * @param args arguments for sending
 */

class EvEmitter
{
	constructor()
	{
		this.listeners = new Map();
	}

	addListener( label, callback )
	{
		this.listeners.has( label ) || this.listeners.set( label, [] );
		this.listeners.get( label ).push( callback );
	}

	removeListener( label )
	{
		const listeners = this.listeners.get( label );
		let index;

		if ( listeners && listeners.length )
		{
			index = listeners.reduce(( i, listener, index ) =>
			{
				return i;
			}, -1);

			if ( index > -1 )
			{
				listeners.splice( index, 1 );
				this.listeners.set( label, listeners );
				
				return true;
			}
		}

		return false;
	}
	
	emit( label, ...args )
	{
		const listeners = this.listeners.get( label );

		if ( 
			listeners 
			&& listeners.length
		)
		{
			listeners.forEach(( listener ) =>
			{
				listener( ...args ); 
			});

			return true;
		}

		return false;
	}
}

export {
	EvEmitter as default,
}
