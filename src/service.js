const Repository = require('./repository');

class Service {
    // Perbaiki menjadi constructor
    constructor() {
        this.repository = new Repository();
    }

    getAllItems() {
        return this.repository.getAllItems();
    }

    getItemById(id) {
        let item = this.primaryRepository.getItemById(id);
        if (!item) {
            item = this.secondaryRepository.getItemById(id);
        }
        if (!item) {
            throw new Error('Item not found in both repositories');
        }
        return item;
    }

    addItem(name) {
        const newItem = { id: this.repository.data.length + 1, name };  // Perbaiki dengan data.length
        return this.repository.addItem(newItem);
    }
}

module.exports = Service;
