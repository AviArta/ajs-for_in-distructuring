export default class Character {
    constructor(name, type, attack, defence, health = 100, level = 1) {
        if (name.length < 2 || name.length > 10) {
            throw new Error("Имя должно иметь от 2 до 10 символов");
        }
        if (!['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
            throw new Error("Не корректный тип персонажа");
        }
        this.name = name;
        this.type = type;
        this.health = health;
        this.level = level;
        this.attack = attack;
        this.defence = defence;
    }
}
