import { Request, Response, NextFunction } from 'express';
import rateLimit from 'express-rate-limit';

export const loginLimiter = rateLimit({
	windowMs: 10 * 60 * 1000, // 10 minutos
	max: 5, // máximo de 5 tentativas por IP por janela
	standardHeaders: true,
	legacyHeaders: false,
	message: { error: 'Too many login attempts, try again later.' },
});

// src/auth.ts
interface SpoofedAuthRequest extends Request {
	user?: string;
}

export function spoofedAuth(
	req: SpoofedAuthRequest,
	res: Response,
	next: NextFunction
) {
	const user = req.headers['x-forwarded-user'];

	if (!user) {
		return res.status(401).json({ error: 'not authenticated' });
	}

	req.user = user as string;
	next();
}
