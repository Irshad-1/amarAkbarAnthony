function bestFriends(name,city,skill){
    this.name=name;
    this.city=city;
    this.skill=skill;
}
let amar = new bestFriends("Amar","Goa","singer");
let akbar = new bestFriends("Akbar","Mumbai","chef");
let anthony = new bestFriends("Anthony","Kashmir","Magician");

function borrowSkill(name,skill){
    console.log(this.name+" borrowed "+name+"'s "+skill+" skills");
}

borrowSkill.call(amar,akbar.name,akbar.skill);
borrowSkill.call(akbar,anthony.name,anthony.skill);
borrowSkill.call(anthony,amar.name,amar.skill);