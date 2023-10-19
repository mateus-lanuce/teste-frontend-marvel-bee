const publicKey = 'ddb53947695fa97ba87e4dbd22d0b4fc';

const baseUrl = 'https://gateway.marvel.com:443/v1/public';

export const getCharacters = async (offset = 0) => {
  const response = await fetch(
    `${baseUrl}/characters?apikey=${publicKey}&offset=${offset}`,
  );
  const { data } = await response.json();
  return data;
}

export const getCharacter = async (id) => {
  const response = await fetch(
    `${baseUrl}/characters/${id}?apikey=${publicKey}`,
  );
  const { data } = await response.json();
  return data;
}

export const getCharacterByinitial = async (initial) => {
  const response = await fetch(
    `${baseUrl}/characters?apikey=${publicKey}&nameStartsWith=${initial}`,
  );
  const { data } = await response.json();
  return data;
}

export const getComicsFromCharacter = async (id) => {
  const response = await fetch(
    `${baseUrl}/characters/${id}/comics?apikey=${publicKey}`,
  );
  const { data } = await response.json();
  return data;
}

export const getComics = async (offset = 0) => {
  const response = await fetch(
    `${baseUrl}/comics?apikey=${publicKey}&offset=${offset}`,
  );
  const { data } = await response.json();
  return data;
}

export const getComic = async (id) => {
  const response = await fetch(
    `${baseUrl}/comics/${id}?apikey=${publicKey}`,
  );
  const { data } = await response.json();
  return data;
}

export const getComicByTitle = async (title) => {
  const response = await fetch(
    `${baseUrl}/comics?apikey=${publicKey}&titleStartsWith=${title}`,
  );
  const { data } = await response.json();
  return data;
}

export const getEventsFromCharacter = async (id) => {
  const response = await fetch(
    `${baseUrl}/characters/${id}/events?apikey=${publicKey}`,
  );
  const { data } = await response.json();
  return data;
}

export const getEvents = async (offset = 0) => {
  const response = await fetch(
    `${baseUrl}/events?apikey=${publicKey}&offset=${offset}`,
  );
  const { data } = await response.json();
  return data;
}
