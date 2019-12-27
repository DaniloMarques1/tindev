import { Request, Response } from 'express';
import request from '../http/request';
import DevModel from '../models/Dev';

export default abstract class DevController {

    public static async index(req: Request, res: Response): Promise<Response> {
        const { user } = req.headers;

        const loggedDev = await DevModel.findById(user);

        const users = await DevModel.find({
            $and: [
                { _id: { $ne: user } },
                { _id: { $nin: loggedDev?.likes }},
                { _id: { $nin: loggedDev?.dislikes } }
            ]
        });


        return res.json(users);

    }

    public static async store(req: Request, res: Response): Promise<Response> {
        const {username} = req.body;
        
        const userExist = await DevModel.findOne({user: username});

        if (userExist) {
            return res.json(userExist);
        }

        const response = await request.get(`/users/${username}`);
        
        const { name, bio, avatar_url: avatar } = response.data;

        const dev =  await DevModel.create({
            name,
            user: username,
            bio,
            avatar
        });
        
        return res.json(dev);
    }
     
}