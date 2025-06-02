import { INewService } from "../contacts/iNewService";
import { Result } from "../infra/result";
import { NewRepository } from "../repository/newRepository";
export class NewService implements INewService {

    async get(_id: string)  {
        let result = await NewRepository.findById(_id);
        return result;
    }

    async getAll(page: number, qtd: number): Promise<Result> {
        let result = new Result();
        result.Page = page;
        result.Qtd = qtd;
        result.Total = await NewRepository.count({});
        result.Data = await NewRepository.find({}).skip((page * qtd) - qtd).limit(qtd);
        return result
    }
}