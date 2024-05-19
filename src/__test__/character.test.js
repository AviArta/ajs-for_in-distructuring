import Character from "../character";

// eslint-disable-next-line no-undef
test("check create object of class Character", () => {
    const angel = new Character("Angel", "Undead");
    const expectedValue = {name: "Angel", 
                        type: "Undead", 
                        health: 100, 
                        level: 1,
                        attack: null,
                        defence: null};
    // eslint-disable-next-line no-undef
    expect(angel).toEqual(expectedValue) ;
});

// eslint-disable-next-line no-undef
test("check create object with uncorrect type", () => {
    // eslint-disable-next-line no-undef
    expect(() => new Character("Angel", "Angel")).toThrow(Error) ;
});

// eslint-disable-next-line no-undef
test("check create object with uncorrect length of name", () => {
    // eslint-disable-next-line no-undef
    expect(() => new Character("AngelAndelAngel", "Undead")).toThrow();
});

/*test('check getSpecialAttacks', () => {
    const bowman = new Bowman('Олег');
    expect(bowman.getSpecialAttacks()).toEqual([
        {
            id: 1,
            name: 'Двойной выстрел',
            icon: 'http://...',
            description: 'Двойной выстрел наносит двойной урон'
        },
        {
            id: 2,
            name: 'Нокаутирующий удар',
            icon: 'http://...',
            description: 'Описание недоступно'
        }
    ]);
});*/

/*test('check getSpecialAttacks without special', () => {
    const bowman = new Bowman('Карл');
    bowman.special = null;
    expect(bowman.getSpecialAttacks()).toEqual([]);
});*/
