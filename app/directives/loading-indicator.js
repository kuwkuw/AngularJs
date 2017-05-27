'use strict';

IoadingIndicator.$inject = [];

function IoadingIndicator() {
    return {
        template: `<div class="progress">
                <div class="progress-bar progress-bar-striped active" role="progressbar" style="width: 100%">
                    Loading...
                </div>
            </div>`
    }
}

module.exports = IoadingIndicator;