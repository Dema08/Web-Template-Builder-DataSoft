/**
 * Safe DOM Mutation Patch for React & Google Translate / Browser Extensions compatibility.
 * 
 * Prevents React from crashing with:
 * "NotFoundError: Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node."
 * or similar insertBefore / replaceChild DOM mismatch errors caused when external scripts (such as Google Translate)
 * wrap, move, or remove text nodes / elements outside React's virtual DOM management.
 */

if (typeof window !== 'undefined' && typeof Node !== 'undefined') {
    const originalRemoveChild = Node.prototype.removeChild;
    Node.prototype.removeChild = function (child) {
        if (child && child.parentNode !== this) {
            if (child.parentNode) {
                return child.parentNode.removeChild(child);
            }
            return child;
        }
        return originalRemoveChild.call(this, child);
    };

    const originalInsertBefore = Node.prototype.insertBefore;
    Node.prototype.insertBefore = function (newNode, referenceNode) {
        if (referenceNode && referenceNode.parentNode !== this) {
            if (referenceNode.parentNode) {
                return referenceNode.parentNode.insertBefore(newNode, referenceNode);
            }
            return this.appendChild(newNode);
        }
        return originalInsertBefore.call(this, newNode, referenceNode);
    };

    const originalReplaceChild = Node.prototype.replaceChild;
    Node.prototype.replaceChild = function (newChild, oldChild) {
        if (oldChild && oldChild.parentNode !== this) {
            if (oldChild.parentNode) {
                return oldChild.parentNode.replaceChild(newChild, oldChild);
            }
            return this.appendChild(newChild);
        }
        return originalReplaceChild.call(this, newChild, oldChild);
    };
}
