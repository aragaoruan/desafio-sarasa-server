class ScoreController {
  async store(req, res) {
    const number = req.params.id;

    if (number === '0') {
      const points = Math.floor(Math.random() * 30 + 1);
      const data = {
        points,
        description: 'Sua pontuacao é baixa',
        debt: [
          {
            id: 1,
            photo: {
              uri: 'https://i.ya-webdesign.com/images/xbox-one-icon-png-2.png',
            },
            oldValue: 'R$280,00',
            newValue: 'por R$79,90',
          },
        ],
        credit: [],
        protection: [],
      };
      return res.json(data);
    }

    if (number < '30') {
      const points = Math.floor(Math.random() * (50 - 31 + 1) + 31);

      const data = {
        points,
        description: 'Sua pontuacao é média',
        debt: [],
        credit: [
          {
            id: 1,
            photo: {
              uri:
                'https://assets.b9.com.br/wp-content/uploads/2019/01/mastercard-2019.jpg',
            },
            oldValue: 'Anuidade Grátis',
            newValue: 'Limite de R$ 2.000,00',
          },
        ],
        protection: [],
      };
      return res.json(data);
    }

    if (number > '30' && number < '70') {
      const points = Math.floor(Math.random() * (90 - 70 + 1) + 70);
      const data = {
        points,
        description: 'Sua pontuacao é média',
        debt: [],
        credit: [],
        protection: [
          {
            id: 1,
            photo: {
              uri:
                'https://icon-icons.com/icons2/1732/PNG/48/iconfinder-securityprotectlockshield46-4021440_113126.png',
            },
            oldValue: '',
            newValue: 'R$ 50,00/mês',
          },
        ],
      };
      return res.json(data);
    }

    if (number > '70' && number < '90') {
      const points = Math.floor(Math.random() * (90 - 100 + 1) + 100);

      const data = {
        points,
        description: 'Sua pontuacao é média',
        debt: [],
        credit: [],
        protection: [
          {
            id: 1,
            photo: {
              uri:
                'https://icon-icons.com/icons2/1732/PNG/48/iconfinder-securityprotectlockshield46-4021440_113126.png',
            },
            oldValue: 'R$ 50,00/mês',
            newValue: 'R$ 30,00/mês',
          },
        ],
      };
      return res.json(data);
    }

    if (number > '90') {
      const data = {
        points: number,
        description: 'Sua pontuacao é média',
        debt: [],
        credit: [],
        protection: [
          {
            id: 1,
            photo: {
              uri:
                'https://icon-icons.com/icons2/1732/PNG/48/iconfinder-securityprotectlockshield46-4021440_113126.png',
            },
            oldValue: 'R$ 50,00/mês',
            newValue: 'R$ 30,00/mês',
          },
        ],
      };
      return res.json(data);
    }

    return res.json({
      points: 0,
      description: '',
      debt: [],
      credit: [],
      protection: [],
    });
  }
}

export default new ScoreController();
