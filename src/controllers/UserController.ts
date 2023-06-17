import { Request, Response } from 'express';
import UserService from '@services/UserService';

class UserController {
    constructor() {}

    async createUser(req: Request, res: Response) {
        const user = await UserService.createUser(req.body);
        res.status(201).json(user);
    }

    async getUserById(req: Request, res: Response) {
        const user = await UserService.findUserById(req.params.id);
        res.json(user);
    }

    async updateUser(req: Request, res: Response) {
        const user = await UserService.updateUser(req.params.id, req.body);
        res.json(user);
    }

    async deleteUser(req: Request, res: Response) {
        await UserService.deleteUser(req.params.id);
        res.status(204).end();
    }
}

export default new UserController();