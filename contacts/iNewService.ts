import { Result } from "../infra/result";

export interface INewService {

    get(id: string);

    getAll(page: number, qnt: number): Promise<Result>;
}