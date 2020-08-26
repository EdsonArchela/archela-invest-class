import React, { useEffect } from 'react';
import * as qs from 'qs';
import { Container } from './style';
import LogoImg from '../../assets/archela-investment-class-logo.png';
import api from '../../services/api';
import { useToast } from '../../hooks/ToastContext';

interface FormData {
  name: string;
  email: string;
  phone: string;
  patrimony: number;
  investments: string;
}

const Unsubscribe: React.FC = () => {
  const { addToast } = useToast();

  useEffect(() => {
    try {
      const [, id] = window.location.search.split('=');
      api.post('/class/unsubscribe', id);
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Ocorreu um erro!',
        description:
          'Não conseguimos realizar o descadastramento do seu e-mail. Tente novamente.',
      });
    }
  }, [addToast]);

  return (
    <>
      <Container>
        <div className="box">
          <div className="box-inner">
            <section className="sec-1">
              <div className="img-rap">
                <img
                  src={LogoImg}
                  alt="Archela Investment Class"
                  className="img-logo"
                />
                <div className="bar" />
              </div>
              <p className="data">Respeitamos a sua opnião</p>
              <p className="description">
                Sua e-mail foi retirado de nossa lista. Não deixe de visitar{' '}
                <a href="http://archelainvest.com.br">nosso site</a> para se
                manter informado.
              </p>
              <p className="company">Archela Investment.</p>
            </section>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Unsubscribe;
