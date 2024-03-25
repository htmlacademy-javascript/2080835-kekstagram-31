// eslint-disable-next-line no-undef
const generatePhotoId = createRandomIdFromRangeGenerator(1, 25);
// eslint-disable-next-line no-undef
const generatePhotoNumber = createRandomIdFromRangeGenerator(1, 25);
// eslint-disable-next-line no-undef
const generateCommentId = createRandomIdFromRangeGenerator(1, 999);

const createComments = () => ({
  id: generateCommentId(),
  // eslint-disable-next-line no-undef
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  // eslint-disable-next-line no-undef
  message: getRandomArrayElement(MESSAGES),
  // eslint-disable-next-line no-undef
  name: getRandomArrayElement(NAMES)
});

const createPhoto = () => ({
  id: generatePhotoId(),
  url: `photos/${generatePhotoNumber()}.jpg`,
  // eslint-disable-next-line no-undef
  description: getRandomArrayElement(DESCRIPTIONS),
  // eslint-disable-next-line no-undef
  likes: getRandomInteger(15, 200),
  // eslint-disable-next-line no-undef
  comments: Array.from({ length: getRandomInteger(0, 30) }, createComments)
});

// eslint-disable-next-line no-undef
const photos = Array.from({ length: PHOTOS_COUNT }, createPhoto);

// eslint-disable-next-line no-console
console.log(photos);
