export function orderByProps(obj, arrKeys) {
    let sortByKeys = [];
    let sortByAbc = [];
    for (const key in obj) {
      if (arrKeys.includes(key)) {
          sortByKeys.push([key, obj[key]]);
      } else {
          sortByAbc.push([key, obj[key]]);
      }
    }
    sortByAbc.sort((a, b) => (a[0] > b[0] ? 1 : -1));
    const sortResult = [];
    const resultForSort = [...sortByKeys, ...sortByAbc];
    resultForSort.forEach((element) => sortResult.push({ key: element[0], value: element[1] }));
    return sortResult;
  }
  