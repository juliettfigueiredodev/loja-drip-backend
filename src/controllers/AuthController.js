const User = require('../models/User'); // para ter acesso a tabela Users no BD
const bcrypt = require('bcryptjs'); // para criptografar senhas (Segurança)
const jwt = require('jsonwebtoken'); 
//para gerar token de autenticação (token : cartão de acesso da API)

//classe responsável pelo login e autenticação de login
class AuthController {
  async generateToken(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email e senha são obrigatórios.' });
    }
    
    const user = await User.findOne({ where: { email } });
    
    if (!user) {
      return res.status(400).json({ error: 'Credenciais inválidas.' }); 
      // mensagem genérica = boa prática de segurança
    }
    
    if (!(await bcrypt.compare(password, user.senha))) {
      return res.status(400).json({ error: 'Credenciais inválidas.' });
    }
    
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    
    return res.status(200).json({ token });//se tudo der certo
  }
}

module.exports = new AuthController();