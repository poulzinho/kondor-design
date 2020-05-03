import {KndButton} from './kndButton';
import {assert} from 'chai';

describe('knd-button', () => {
    let node: any;

    beforeEach(async () => {
        // Use createElement to test it is registered correctly
        node = document.createElement('knd-button');

        // Connect to DOM in case there's any `connectedCallback` logic
        document.body.appendChild(node);

        // Wait for initial render
        await node.updateComplete;
    });

    afterEach(() => {
        // Remove from DOM, cleanup
        node.remove();
    });

    it('should render', () => {
        assert.instanceOf(node, KndButton);
    });
});
