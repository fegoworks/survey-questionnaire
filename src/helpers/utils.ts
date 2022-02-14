type Image = {
  src: string;
  credit: string;
};

export function randomNoRepeats(images: Image[]): Image {
  let copy: Image[] = images.slice(0);
  if (copy.length < 1) {
    copy = images.slice(0);
  }
  const index: number = Math.floor(Math.random() * copy.length);
  const item: Image = copy[index];
  copy.splice(index, 1);
  return item;
}
