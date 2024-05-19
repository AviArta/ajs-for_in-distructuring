import { orderByProps } from "../sort";

// eslint-disable-next-line no-undef
test ("check sort by keys", () => {
    const character = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
    const expectedValue = [
      {key: "name", value: "мечник"},
      {key: "level", value: 2}, 
      {key: "attack", value: 80},
      {key: "defence", value: 40}, 
      {key: "health", value: 10} 
    ]
      // eslint-disable-next-line no-undef
      expect(orderByProps(character, ["name", "level"])).toEqual(expectedValue) ;
  });