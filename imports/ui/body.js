import { Template } from 'meteor/templating';

import { JournalEntries } from '../api/journalEntries.js';

import './journalEntry.js';
import './body.html';

Template.body.helpers({
  journalEntries() {
    // Sort journal entries by created at date, showing newest at the top
    return JournalEntries.find({}, {sort: { createdAt: -1 } });
  },
});

Template.body.events({
  'submit #js-create-journal-entry'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    console.log('clicked');
    
    // Get value from form element
    const target = event.target;
    const text = target.text.value;

    // Insert a journal entry into the collection
    JournalEntries.insert({
      text,
      createdAt: new Date(), 
    });
    // Clear form
    target.text.value = '';
  },
})
