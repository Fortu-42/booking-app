const Event = require('../../models/event');
const { transformEvent } = require('./merge');

module.exports = {
  events: async () => {
    try {
      const events = await Event.find();
      return events.map((event) => {
        return transformEvent(event);
      });
    } catch (err) {
      throw err;
    }
  },
  createEvent: async (args) => {
    try {
      const event = new Event({
        title: args.eventInput.title,
        description: args.eventInput.description,
        price: +args.eventInput.price,
        date: new Date(args.eventInput.date),
        creator: '5c35f498433eb20af0b288a5',
      });

      let createdEvent;

      const result = await event.save();

      createdEvent = transformEvent(result);

      const creator = await User.findById('5c35f498433eb20af0b288a5');

      if (!creator) {
        throw new Error("user doesn't exists");
      }

      creator.createdEvents.push(event);
      await creator.save();

      return createdEvent;
    } catch (err) {
      throw err;
    }
  },
};
