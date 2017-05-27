'use strict';

IoadingIndicator.$inject = ['requestResponseEmiter'];

function IoadingIndicator(requestResponseEmiter) {
    return {
        restrict: 'E',
        template: `<div class="progress">
                <div class="progress-bar progress-bar-striped active" role="progressbar" style="width: 100%">
                    Loading...
                </div>
            </div>`,
        link: function (scope, element, attrs) {
            requestResponseEmiter.onRequest(function () {
                element[0].hidden = false;
            })
            requestResponseEmiter.onResponse(function () {
                element[0].hidden = true;
            })
        }
    }
}

module.exports = IoadingIndicator;