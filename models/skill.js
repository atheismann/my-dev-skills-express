const skills = [
  {skill: 'JavaScript'},
  {skill: 'HTML'},
  {skill: 'CSS'},
  {skill: 'TWIG'},
];

module.exports = {

};

function getOne(id){
  return skills[id];
}

function getAll(){
  return skills;
}

function create(skill){
  skills.push(skill);
}

function deleteOne(id){
  skills.splice(id,1);
}

function update(id, skill) {
skills[id] = skill;
}