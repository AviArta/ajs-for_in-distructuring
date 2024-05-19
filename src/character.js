export default class Character {
    constructor(name, type) {
        if (name.length < 2 || name.length > 10) {
            throw new Error("Имя должно иметь от 2 до 10 символов");
        }
        if (!['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
            throw new Error("Не корректный тип персонажа");
        }
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = null;
        this.defence = null;
    }
}

   
    
   

    /*getSpecialAttacks() {
        const result = [];
        const { special } = this;

        if (!special) {
            return result;
        }

        for (let i = 0; i < special.length; i++) {
            result.push({
                id: special[i].id,
                name: special[i].name,
                icon: special[i].icon,
                description: special[i].description ? special[i].description : 'Описание недоступно'
            });
        }
        return result;
    }*/

/*getAttacSpecs(character) {
  const arr = [];
  character.special.forEach((el) => {
    const { description = 'Описание недоступно', ...val } = el;
    arr.push({ ...val, description });
  });
  return arr;
}*/
