const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log('connected to mongoose db');
  //we're connected
});


let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  repo_id: Number,
  url: String,
  name: String,
  forks: Number

});

let Repo = mongoose.model('Repo', repoSchema);

//data is the data you want to save, pass in a callback
// var test = {repo_id: 1223, url: '123.html', name: 'testrepo1', forks: 12};
let save = (repo) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDb
  var repoData = new Repo(repo)
  repoData.save((err, repoData) => {
    if (err) {
      console.log(err);
    } else {
      // callback(repoData)
      console.log('success')
    }
  })
}

// save(test)
module.exports.save = save;
