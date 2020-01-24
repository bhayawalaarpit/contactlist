export const groupByName = (data, search = undefined) => {
  const object = {};
  data.forEach(data => {
    if (search) {
      if (!object.hasOwnProperty(search)) object[search] = [];
      object[search].push(data);
    } else {
      const char = data.firstname[0].toUpperCase();
      if (!object.hasOwnProperty(char)) object[char] = [];
      object[char].push(data);
    }
  });
  return object;
};
