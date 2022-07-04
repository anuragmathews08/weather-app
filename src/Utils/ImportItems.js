function ImportItems(items) {
  let images = {};
  items.keys().map((item, index) => {
    images[item.replace('./', '')] = items(item);
  });
  return images;
}

export default ImportItems;
