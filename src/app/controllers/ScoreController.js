class ScoreController {
  async store(req, res) {
    const number = req.params.id;

    let data = [];
    /**
     * Pontuacao baixa
     */
    if (number === '1') {
      const points = Math.floor(Math.random() * 30 + 1);
      data = {
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
    }

    /**
     * Pontuacao média
     */
    if (number === '2') {
      const points = Math.floor(Math.random() * (60 - 48 + 1) + 48);

      let protection = [];
      if (points > 50) {
        protection = [
          {
            id: 1,
            photo: {
              uri:
                'https://icon-icons.com/icons2/1732/PNG/48/iconfinder-securityprotectlockshield46-4021440_113126.png',
            },
            oldValue: '',
            newValue: 'R$ 50,00/mês',
          },
        ];
      }

      data = {
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
        protection,
      };
    }

    /**
     * Pontuacao alta
     */
    if (number === '3') {
      const points = Math.floor(Math.random() * (90 - 100 + 1) + 100);

      data = {
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
    }

    return res.json(data);
  }
}

export default new ScoreController();
