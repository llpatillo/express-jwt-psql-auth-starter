'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Quotes', [
      {
        author:"Stephen Covey",
        quote:"\'Begin with the end in mind\'",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author:"Pat Summitt",
        quote:"\\'It\'s harder to stay on top than it is to make the climb. Continue to seek new goals.\'",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
        author:"Unknown",
        quote:"\'You got this!\'",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
        author:"Unknown",
        quote:"\'Keep pushing!\'",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author:"Albert Einstein",
        quote:"\'If you want to live a happy life, tie it to a goal, not to people or things.\'",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author:"Michael Korda",
        quote:"\'One way to keep momentum going is to have constantly greater goals.\'",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author:"Unknown",
        quote:"\'If you aim for nothing, you\\'ll hit it every time.\'",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
        author:"Unknown",
        quote:"\'Follow your dreams.\'",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
        author:"Unknown",
        quote:"\'Reach for the stars.\'",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
        author:"Unknown",
        quote:"\'The sky is the limit.\'",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
        author:"Unknown",
        quote:"\'Believe in yourself.\'",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author:"Yuichiro",
        quote:"\\'It\'s important to set your own goals and work hard to achieve them.\'",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author:"Ted Turner",
        quote:"\'You should set goals beyond your reach so you always have something to live for.\'",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author:"Michelangelo",
        quote:"\'The greater danger for most of us isn\t that our aim is too high and miss it, but that it is too low and we reach it.\'",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author:"Unknown",
        quote:"\'Just do it.\'",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author:"Zig Ziglar",
        quote:"\'A goal properly set is halfway reached.\'",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author:"Bill Copeland",
        quote:"\'The trouble with not having a goal is that you can spend your life running up and down the field and never score.\'",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author:"Solon",
        quote:"\'In all things that you do, consider the end.\'",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author:"Unknown",
        quote:"\'In the absence of clearly defined goals, we become strangely loyal to performing daily acts of trivia.\'",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author:"Japanese Proverb",
        quote:"\'Vision without action is adaydream. Action without vision is nightmare.\'",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author:"Jill Koenig",
        quote:"\'If a goal is worth having, it\'s worth blocking out the time in your day-to-day life necessary to achieve it.\'",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author:"Bo Bennett",
        quote:"\'A dream becomes a goal when action is taken toward its achievement.\'",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author:"Mary Kay Ash",
        quote:"\'A good goal is like a strenuous exercise � it makes you stretch.\'",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author:"Johann Wolfgang von Goethe",
        quote:"\'Knowing is not enough; we must apply. Willing is not enough; we must do.\'",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author:"Viktor Frankl",
        quote:"\'Life can be pulled by goals just as surely as it can be pushed by drives\'",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author:"Michel de Montaigne",
        quote:"\'The great glorious masterpiece of man is to know how to live with purpose.\'",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author:"Unknown",
        quote:"\'If the plan doesn\'t work, change the plan, but never the goal.\'",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author:"Earl Nightingale",
        quote:"\'People with goals succeed because they know where they\'re going.\'",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author:"Dennis DeYoung",
        quote:"\'Winners are losers who got up and gave it one more try.\'",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author:"Theodore Roosevelt",
        quote:"\'It is hard to fail, but it is worse never to have tried to succeed.\'",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author:"Steve Jobs",
        quote:"\'The people who are crazy enough to think they can change the world are the ones who do.\'",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author:"Stephen King",
        quote:"\'You can, you should, and if you\\�re brave enough to start, you will.\'",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author:"Confucious",
        quote:"\'It does not matter how slowly you go as long as you do not stop.\'",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author:"George Whitfield",
        quote:"\'Press forward. Do not stop, do not linger in your journey, but strive for the mark set before you.\'",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author:"Manuel Miranda",
        quote:"\'I know how it looks. But just start. Nothing is insurmountable.\'",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author:"C.S. Lewis",
        quote:"\'You are never too old to set a new goal or to dream a new dream.\'",
        createdAt: new Date(),
        updatedAt: new Date()
      }], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
