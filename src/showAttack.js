export function showAttackDetails(object) {
  const resultArr = [];
  for (const element of object.special) {
    if (!Object.keys(element).includes("description")) {
      const { description = "Описание недоступно", ...elseElement} = element;
      resultArr.push({...elseElement, description})
    } else {
      resultArr.push(element);
    } 
  }
  return resultArr;
  }
  