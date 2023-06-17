import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '@utils/authUtils';

interface RequestWithUser extends Request {
    user?: any;
}

function sameUserAuthMiddleware(req: RequestWithUser, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];
        const payload = verifyToken(token);

        if (payload) {
            req.user = payload;
            if (req.user._id !== req.params.id) {
                return res.status(401).json({ error: 'Unauthorized' });
            }
            next();
        } else {
            res.status(401).json({ error: 'Invalid token' });
        }
    } else {
        res.status(401).json({ error: 'No token provided' });
    }
}

export default sameUserAuthMiddleware;