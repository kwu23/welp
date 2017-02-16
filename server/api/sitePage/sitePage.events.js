/**
 * SitePage model events
 */

'use strict';

import {EventEmitter} from 'events';
import SitePage from './sitePage.model';
var SitePageEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
SitePageEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
for(var e in events) {
  let event = events[e];
  SitePage.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    SitePageEvents.emit(event + ':' + doc._id, doc);
    SitePageEvents.emit(event, doc);
  };
}

export default SitePageEvents;
