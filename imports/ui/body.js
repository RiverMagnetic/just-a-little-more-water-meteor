import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { JournalEntries } from '../api/journalEntries.js';

import './body.html';

Template.body.helpers({
  journalEntries() {
    return JournalEntries.find({});
  },
});
