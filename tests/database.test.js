const database = require('./../database/index.js');

describe('Find should retrieve collection for Projects', () => {
  it('Should find an array containing all projects', () => {
    return database.Project.find()
    .then(projects => expect(Array.isArray(projects)).toEqual(true));
  })
})

describe('Should allow for insertion of new Mongo documents into database', () => {
  it('Should find a document after it has been inserted into database', () => {
    database.createProject([{
      name: 'L O F I • Hip Hop Radio • 24/7',
      summary: 'Help fund our lofi hip hop livestream, full of mellow melodic beats perfect for studying, work, relaxing, or focusing..',
      owner: {
        avatar: 'https://yt3.ggpht.com/a-/AN66SAzuvt7wwLelQ34EIP8hmDYLiuzGK-mOkiXsuA=s88-mo-c-c0xffffffff-rj-k-no',
        name: 'Chillhop Music',
        numProjects: 2,
        },
      player: {
        source: 'https://www.youtube.com/embed/LsBrT6vbQa8',
        location: 'Brooklyn, NY',
        },
      status: {
        currentRaised: 8820,
        targetGoal: 25000,
        backers: 7598,
        deadline: 1538025653155,
        formatted: 1538025653155
      }
    }])
    return database.Project.find({name: 'L O F I • Hip Hop Radio • 24/7'})
    .then(projects => expect(projects[0].name).toEqual('L O F I • Hip Hop Radio • 24/7'));
  })
})