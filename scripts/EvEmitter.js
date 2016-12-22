/**
 * Реализация EventEmitter
 * 
 * @method addListener добавляет слушателя и позволяет слушать его всем подписчикам
 * @param label название события
 * @param callback функция обратного вызова
 *
 * @method removeListener удаляет слушателя
 * @param label название события
 * @param callback функция обратного вызова
 *
 * @method emit уведомляет всех слушателей о изменении состояния
 * @param label название события
 * @param args список изменений
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
