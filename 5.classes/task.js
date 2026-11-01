class PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state = 100, type = null) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = state;
		this.type = type;
	}

	fix() {
		this.state *= 1.5;
	}

	set state(anyNumber) {
		if (anyNumber < 0) {
			this._state = 0;
		} else if (anyNumber > 100) {
			this._state = 100;
		} else {
			this._state = anyNumber;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state) {
		super(name, releaseDate, pagesCount, state);
		this.type = 'magazine';
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount, state) {
		super(name, releaseDate, pagesCount, state);
		this.author = author;
		this.type = 'book';
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state = 100) {
		super(author, name, releaseDate, pagesCount, state);
		this.type = 'novel';
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state = 100) {
		super(author, name, releaseDate, pagesCount, state);
		this.type = 'fantastic';
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state = 100) {
		super(author, name, releaseDate, pagesCount, state);
		this.type = 'detective';
	}
}

class Library {
	constructor(name, books = []) {
		this.name = name;
		this.books = books;
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i][type] === value) {
				return this.books[i];
			}
		}
		return null;
	}

	giveBookByName(bookName) {
		const index = this.books.findIndex(book => book.name === bookName);
		if (index === -1) {
			return null;
		}
		return this.books.splice(index, 1)[0];
	}
}

class Student {
	constructor(name) {
		this.name = name;
		this.marks = {};
	}

	addMark(mark, subject) {
		if (mark >= 2 && mark <= 5) {
			if (!this.marks[subject]) {
				this.marks[subject] = [];
			}
			this.marks[subject].push(mark);
		}
	}

	getAverageBySubject(subject) {
		if (!this.marks[subject]) {
			return 0;
		}
		const sum = this.marks[subject].reduce((acc, mark) => {
			return acc + mark;
		}, 0);
		return sum / this.marks[subject].length;
	}

	getAverage() {
		const subjects = Object.keys(this.marks);
		if (subjects.length === 0) {
			return 0;
		}
		let averageMark = 0;
		for (let i = 0; i < subjects.length; i++) {
			averageMark += this.getAverageBySubject(subjects[i]);
		}
		return averageMark / subjects.length;
	}
}