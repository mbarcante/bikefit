import { Model, FindAndCountOptions } from 'sequelize';

export class Paginator<T extends Model> {
    #limit
    #offset

    constructor(limit = 2, offset = 0) {
        this.#limit = this.#castingData(limit) ?? 2;
        this.#offset = this.#castingData(offset) ?? 0;
    }
    #castingData(data: number) {
        try { return Number(data) }
        catch (e) { return null }
    }

    async getData(model: any, condition: object) {
        let { rows, count } = await model.findAndCountAll({
            ...condition,
            limit: this.#limit,
            offset: this.#offset,
            // order: [['createdAt', 'DESC']]
        } as FindAndCountOptions);

        let paginateCount = Math.ceil(count / this.#limit);

        return {
            data: rows,
            paginate: paginateCount,
            limit: this.#limit,
            totalReg: count
        };
    }

}