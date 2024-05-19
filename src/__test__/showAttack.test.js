import { showAttackDetails } from "../showAttack";

// eslint-disable-next-line no-undef
test ("check sort by keys", () => {
    const character = {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 3,
        attack: 40,
        defence: 10,
        special: [
          {
            id: 8,
            name: 'Двойной выстрел',
            icon: 'http://...',
            description: 'Двойной выстрел наносит двойной урон'
          }, 
          {
            id: 9,
            name: 'Нокаутирующий удар',
            icon: 'http://...'
          }
        ]	
      }
    const expectedValue = [
        {
          id: 8,
          name: 'Двойной выстрел',
          icon: 'http://...',
          description: 'Двойной выстрел наносит двойной урон'
        }, 
        {
          id: 9,
          name: 'Нокаутирующий удар',
          icon: 'http://...',
          description: 'Описание недоступно'
        }
      ]
      // eslint-disable-next-line no-undef
      expect(showAttackDetails(character)).toEqual(expectedValue) ;
  });
  