class Service 
{
    constructor(model) {
        this.model = model
    }

    async findAll() {
        return await this.model.find()        
    }

    async find(id) {
        return await this.model.findById(id)
    }

    async add(item) {
        return await this.model.create(item)
    }

    async update(id, update) {
        return await this.model.findByIdAndUpdate(id, update)
    }

    async delete(id) {
        return await this.model.findByIdAndDelete(id)
    }
}

module.exports = Service
