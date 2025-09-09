/* Operaciones de conjunto */

class Node {

	#_nodeLinks;
	#_nodeValue;
	#_nodeToken
	constructor(nodeType, nodeValue) {

		// Proxy para acceso dinámico a NodeLinks
		/*
		return new Proxy(this, {

			get(target, prop) {
				// Propiedades nativas de la clase
				if (prop in target || typeof prop === 'symbol') {
					return target[prop];
				}

				// Acceso dinámico a NodeLinks
				if (typeof prop === 'string') {
					return target._getLinkProxy(prop);
				}

				return undefined;
			},

			set(target, prop, value) {
				// Propiedades nativas
				if (prop in target || prop.startsWith('_') || prop.startsWith('#')) {
					target[prop] = value;
					return true;
				}

				// Crear/actualizar NodeLink dinámicamente
				if (typeof prop === 'string') {
					target._setLink(prop, value);
					return true;
				}

				return false;
			}

		});
		*/

	}

	_addLink(node) {}
	_remLink(node) {}
	_updateValue(newValue) {}
	async _resolveLink(linkKey) {}
	async _applyMatrix(nodeMatrix) {}
	async _getType() {}

}

class NodeLink {

	constructor(node) {

	}

}

class NodeMatrix {

	constructor() {

	}

	_apply(node) {}

}

export { Node, NodeMatrix }