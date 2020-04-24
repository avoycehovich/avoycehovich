export default class GotService {

    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api'
    }


    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }
        return await res.json();
    };

    async getAllCharacters() {
        const res = await this.getResource('/characters?page=5&pageSize=10');
        return res.map(this._transformCharacter);
    }

    async getCharacter(id) {
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character);
    }

    getBooks() {
        const books = this.getResource('/books/');
        return books.map(this._transformBook);
    }

    getBook(id) {
        const book = this.getResource(`/books/${id}/`);
        return this._transformBook(book);
    }

    getHouses() {
        const houses = this.getResource('/houses/')
        return houses.map(this._transformHouse);
    }

    getHouse(id) {
        const house = this.getResource(`/houses/${id}/`)
        return this._transformHouse(house);
    }

    _transformCharacter(char) {
        return {
            name: !char.name ? 'Nothing to show' : char.name,
            gender: !char.gender ? 'Nothing to show' : char.gender,
            born: !char.born ? 'Nothing to show' : char.born,
            died: !char.died ? 'Nothing to show' : char.died,
            culture: !char.culture ? 'Nothing to show' : char.culture
        }
    }

    _transformHouse(house) {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }

    _transformBook(book) {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publiser: book.publiser,
            released: book.released
        }
    }
}