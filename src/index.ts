import express from 'express';
import users from './data/users.json';
import sales from './data/sales.json';
import { loginLimiter, spoofedAuth } from './utils';

const app = express();
app.use(express.json());

/* app.use('/login', loginLimiter); */ // Resolve o erro aplicando Rate-Limit

app.get('/', (req, res) => {
	return res.json({ message: 'Hello World!' });
});

//Rota vulneravel por exibir informações sensiveis sem autenticação
app.get('/users', (_req, res) => {
	res.json({
		data: users,
	});
});

//Rota vulneralvel por tentativa de força bruta
app.post('/login', (req, res) => {
	const { user, password } = req.body;

	if (!user || !password)
		return res.status(400).json({ error: 'Campos não preenchidos' });

	const found = users.find((u) => u.user === user && u.password === password);

	if (!found) return res.status(401).json({ error: 'Credenciais invalidas' });

	console.log('request recebida');

	const token = Buffer.from(user).toString('base64');
	return res.json({ token, message: 'Authenticated' });
});

app.get('/admin/sales', spoofedAuth, (req, res) => {
	//@ts-ignore
	if (req.user !== 'admin') {
		return res.status(403).json({ error: 'Access denied' });
	}

	res.json({ data: sales });
});

app.listen(3000, () => {
	console.log('Server running http://localhost:3000');
});
