'use strict';

angular.module('chatterbox.version', [
  'chatterbox.version.interpolate-filter',
  'chatterbox.version.version-directive'
])

.value('version', '0.1');
