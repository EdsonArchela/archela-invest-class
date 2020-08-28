import React, { useRef, useCallback, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiUser, FiMail, FiPhone } from 'react-icons/fi';
import { VscDebugBreakpointDataUnverified } from 'react-icons/vsc';
import { Facebook, Telegram, Whatsapp } from 'react-social-sharing';
import { useMediaQuery } from 'react-responsive';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';
import { Container, ContainerMobile } from './style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import LogoImg from '../../assets/archela-investment-class-logo.png';
import { useToast } from '../../hooks/ToastContext';
import api from '../../services/api';

interface FormData {
  name: string;
  email: string;
  phone: string;
  patrimony: number;
  investments: string;
}

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [patrimony, setPatrimony] = useState('');
  const [poupanca, setPoupanca] = useState(false);
  const [rendaFixa, setRendaFixa] = useState(false);
  const [fundInvest, setFundInvest] = useState(false);
  const [fundImob, setFundImob] = useState(false);
  const [acoesLong, setAcoesLong] = useState(false);
  const [acoesShort, setAcoesShort] = useState(false);
  const [derivativos, setDerivativos] = useState(false);
  const [prev, setPrev] = useState(false);
  const [imob, setImob] = useState(false);
  const [commodities, setCommodities] = useState(false);
  const [outros, setOutros] = useState(false);
  const [vouInvestir, setVouInvestir] = useState(false);
  const [phone, setPhone] = useState('');
  const { addToast } = useToast();
  const isMobile = useMediaQuery({ query: '(max-width: 800px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 1224px)' });

  const phoneMask = (value: string): string => {
    return value
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/g, '($1) $2')
      .replace(/(\d)(\d{4})$/, '$1-$2');
  };

  const handleSubmit = useCallback(
    async (data: FormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome completo'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          phone: Yup.string()
            .min(14)
            .max(15)
            .required('Use um telefone válido'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const finalData = data;

        finalData.investments = JSON.stringify({
          poupanca,
          rendaFixa,
          fundInvest,
          fundImob,
          acoesLong,
          acoesShort,
          derivativos,
          prev,
          imob,
          commodities,
          outros,
          vouInvestir,
        });
        finalData.patrimony = Number(patrimony);
        await api.post('/class', finalData).then(() => {
          addToast({
            type: 'success',
            title: 'Cadastro realizado com sucesso!',
            description:
              'Sua Aula será dia 15 de Agosto às 20:30h. Não esqueça de compartilhar.',
          });
        });
        window.location.assign('http://archelainvest.com.br');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          type: 'error',
          title: 'Erro durante seu cadastro',
          description: 'Ocorreu um erro em suas incrição, tente novamente',
        });
      }
    },
    [
      acoesLong,
      acoesShort,
      addToast,
      commodities,
      derivativos,
      fundImob,
      fundInvest,
      imob,
      outros,
      patrimony,
      poupanca,
      prev,
      rendaFixa,
      vouInvestir,
    ],
  );

  return (
    <>
      {isMobile ? (
        <ContainerMobile>
          <section className="sec-1">
            <div className="img-rap">
              <img
                src={LogoImg}
                alt="Archela Investment Class"
                className="img-logo"
              />
              <div className="bar" />
            </div>
            <p className="data">15 de Agosto - 20:30</p>
            <p className="price">ONLINE E GRATUITO</p>
            <p className="description">
              Pretende iniciar no mercado financeiro? Não deixe de participar
              desta aula e aprender os princípios mais importantes para
              investimentos em:
            </p>
            <ul>
              <li>Renda Fixa</li>
              <li>Renda Variável</li>
              <li>Previdência</li>
            </ul>
            <div className="share">
              <h2>Inscreva-se já</h2>
              <div className="share-buttons">
                {isTablet ? (
                  <>
                    <Facebook
                      solid
                      small
                      link="http://http://class.archelainvest.com.br"
                    />
                    <Telegram
                      solid
                      small
                      link="http://class.archelainvest.com.br"
                    />
                    <Whatsapp
                      solid
                      small
                      link="http://class.archelainvest.com.br"
                    />
                  </>
                ) : (
                  <>
                    <Facebook link="http://class.archelainvest.com.br" />
                    <Telegram link="http://class.archelainvest.com.br" />
                    <Whatsapp link="http://class.archelainvest.com.br" />
                  </>
                )}
              </div>
            </div>
          </section>
          <section className="sec-2">
            <Form ref={formRef} onSubmit={handleSubmit}>
              <h1>Cadastre hoje - Não perca esta oportunidade!</h1>
              <Input name="name" placeholder="Nome" icon={FiUser} />
              <Input name="email" placeholder="E-mail" icon={FiMail} />
              <Input name="phone" placeholder="Celular" icon={FiPhone} />
              <div className="question">
                <VscDebugBreakpointDataUnverified />
                <h2>Qual o seu patrimônio investido hoje?</h2>
              </div>
              <select
                name="sel-patrimony"
                value={patrimony}
                onChange={value => {
                  setPatrimony(value.target.value || '');
                }}
              >
                <option value="1">R$ 0 a 20 mil</option>
                <option value="2">R$ 20 a 50 mil</option>
                <option value="3">R$ 50 a 200 mil</option>
                <option value="4">R$ 200 a 500 mil</option>
                <option value="5">R$ 500 mil a 2 milhões</option>
                <option value="6">R$ Acima de 2 milhões</option>
              </select>
              <div className="question">
                <VscDebugBreakpointDataUnverified />
                <h2>Selecione as classes de investimentos que possui.</h2>
              </div>
              <div className="investiments-container">
                <label htmlFor="poupanca">
                  <input
                    id="poupanca"
                    type="checkbox"
                    checked={poupanca}
                    onChange={() => {
                      setPoupanca(!poupanca);
                    }}
                  />
                  Poupança
                </label>

                <label htmlFor="rendaFixa">
                  <input
                    id="rendaFixa"
                    type="checkbox"
                    checked={rendaFixa}
                    onChange={() => {
                      setRendaFixa(!rendaFixa);
                    }}
                  />
                  Renda Fixa
                </label>
                <label htmlFor="fundInvest">
                  <input
                    id="fundInvest"
                    type="checkbox"
                    checked={fundInvest}
                    onChange={() => {
                      setFundInvest(!fundInvest);
                    }}
                  />
                  Fundos de Investimentos
                </label>
                <label htmlFor="fundImob">
                  <input
                    id="fundImob"
                    type="checkbox"
                    checked={fundImob}
                    onChange={() => {
                      setFundImob(!fundImob);
                    }}
                  />
                  Fundos Imobiliários
                </label>
                <label htmlFor="acoesLong">
                  <input
                    id="acoesLong"
                    type="checkbox"
                    checked={acoesLong}
                    onChange={() => {
                      setAcoesLong(!acoesLong);
                    }}
                  />
                  Ações para Longo Prazo
                </label>
                <label htmlFor="acoesShort">
                  <input
                    id="acoesShort"
                    type="checkbox"
                    checked={acoesShort}
                    onChange={() => {
                      setAcoesShort(!acoesShort);
                    }}
                  />
                  Ações para Curto Prazo
                </label>
                <label htmlFor="derivativos">
                  <input
                    id="derivativos"
                    type="checkbox"
                    checked={derivativos}
                    onChange={() => {
                      setDerivativos(!derivativos);
                    }}
                  />
                  Derivativos
                </label>
                <label htmlFor="prev">
                  <input
                    id="prev"
                    type="checkbox"
                    checked={prev}
                    onChange={() => {
                      setPrev(!prev);
                    }}
                  />
                  Previdência
                </label>
                <label htmlFor="imob">
                  <input
                    id="imob"
                    type="checkbox"
                    checked={imob}
                    onChange={() => {
                      setImob(!imob);
                    }}
                  />
                  Imóveis
                </label>
                <label htmlFor="commodities">
                  <input
                    id="commodities"
                    type="checkbox"
                    checked={commodities}
                    onChange={() => {
                      setCommodities(!commodities);
                    }}
                  />
                  Commodities
                </label>
                <label htmlFor="outros">
                  <input
                    id="outros"
                    type="checkbox"
                    checked={outros}
                    onChange={() => {
                      setOutros(!outros);
                    }}
                  />
                  Outros
                </label>
                <label htmlFor="vouInvestir">
                  <input
                    id="vouInvestir"
                    type="checkbox"
                    checked={vouInvestir}
                    onChange={() => {
                      setVouInvestir(!vouInvestir);
                    }}
                  />
                  Quero começar
                </label>
              </div>
              <Button type="submit">Cadastrar</Button>
            </Form>
          </section>
        </ContainerMobile>
      ) : (
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
                <p className="data">15 de Setembro - 20:30</p>
                <p className="price">ONLINE E GRATUITO</p>
                <p className="description">
                  Pretende iniciar no mercado financeiro? Não deixe de
                  participar desta aula e aprender os princípios mais
                  importantes para investimentos em:
                </p>
                <ul>
                  <li>Renda Fixa</li>
                  <li>Renda Variável</li>
                  <li>Previdência</li>
                </ul>
                <div className="share">
                  <h2>Compartilhe</h2>
                  <div className="share-buttons">
                    {isTablet ? (
                      <>
                        <Facebook
                          solid
                          small
                          link="class.archelainvest.com.br"
                        />
                        <Telegram
                          solid
                          small
                          link="class.archelainvest.com.br"
                        />
                        <Whatsapp
                          solid
                          small
                          link="class.archelainvest.com.br"
                        />
                      </>
                    ) : (
                      <>
                        <Facebook link="class.archelainvest.com.br" />
                        <Telegram link="class.archelainvest.com.br" />
                        <Whatsapp link="class.archelainvest.com.br" />
                      </>
                    )}
                  </div>
                </div>
              </section>
              <section className="sec-2">
                <Form ref={formRef} onSubmit={handleSubmit}>
                  <h1>Cadastre hoje - Não perca esta oportunidade!</h1>
                  <Input name="name" placeholder="Nome" icon={FiUser} />
                  <Input name="email" placeholder="E-mail" icon={FiMail} />
                  <Input
                    name="phone"
                    placeholder="Celular"
                    icon={FiPhone}
                    value={phone}
                    onChange={event => {
                      setPhone(phoneMask(event.target.value));
                    }}
                  />
                  <div className="question">
                    <VscDebugBreakpointDataUnverified />
                    <h2>Qual valor de patrimônio almeja constituir?</h2>
                  </div>
                  <select
                    name="sel-patrimony"
                    value={patrimony}
                    onChange={value => {
                      setPatrimony(value.target.value || '');
                    }}
                  >
                    <option value="1">R$ 0 a 20 mil</option>
                    <option value="2">R$ 20 a 50 mil</option>
                    <option value="3">R$ 50 a 200 mil</option>
                    <option value="4">R$ 200 a 500 mil</option>
                    <option value="5">R$ 500 mil a 2 milhões</option>
                    <option value="6">R$ Acima de 2 milhões</option>
                  </select>

                  <legend className="question">
                    <VscDebugBreakpointDataUnverified />
                    <h2>Selecione as classes de investimentos que possui.</h2>
                  </legend>
                  <div className="investiments-container">
                    <div className="input-div">
                      <input
                        type="checkbox"
                        checked={poupanca}
                        onChange={() => {
                          setPoupanca(!poupanca);
                        }}
                      />
                      Poupança
                    </div>
                    <div className="input-div">
                      <input
                        type="checkbox"
                        checked={rendaFixa}
                        onChange={() => {
                          setRendaFixa(!rendaFixa);
                        }}
                      />
                      Renda Fixa
                    </div>
                    <div className="input-div">
                      <input
                        type="checkbox"
                        checked={fundInvest}
                        onChange={() => {
                          setFundInvest(!fundInvest);
                        }}
                      />
                      Fundos de Investimentos
                    </div>
                    <div className="input-div">
                      <input
                        type="checkbox"
                        checked={fundImob}
                        onChange={() => {
                          setFundImob(!fundImob);
                        }}
                      />
                      Fundos Imobiliários
                    </div>
                    <div className="input-div">
                      <input
                        type="checkbox"
                        checked={acoesLong}
                        onChange={() => {
                          setAcoesLong(!acoesLong);
                        }}
                      />
                      Ações para Longo Prazo
                    </div>
                    <div className="input-div">
                      <input
                        type="checkbox"
                        checked={acoesShort}
                        onChange={() => {
                          setAcoesShort(!acoesShort);
                        }}
                      />
                      Ações para Curto Prazo
                    </div>
                    <div className="input-div">
                      <input
                        type="checkbox"
                        checked={derivativos}
                        onChange={() => {
                          setDerivativos(!derivativos);
                        }}
                      />
                      Derivativos
                    </div>
                    <div className="input-div">
                      <input
                        type="checkbox"
                        checked={prev}
                        onChange={() => {
                          setPrev(!prev);
                        }}
                      />
                      Previdência
                    </div>
                    <div className="input-div">
                      <input
                        type="checkbox"
                        checked={imob}
                        onChange={() => {
                          setImob(!imob);
                        }}
                      />
                      Imóveis
                    </div>
                    <div className="input-div">
                      <input
                        type="checkbox"
                        checked={commodities}
                        onChange={() => {
                          setCommodities(!commodities);
                        }}
                      />
                      Commodities
                    </div>
                    <div className="input-div">
                      <input
                        type="checkbox"
                        checked={outros}
                        onChange={() => {
                          setOutros(!outros);
                        }}
                      />
                      Outros
                    </div>
                    <div className="input-div">
                      <input
                        type="checkbox"
                        checked={vouInvestir}
                        onChange={() => {
                          setVouInvestir(!vouInvestir);
                        }}
                      />
                      Quero começar
                    </div>
                  </div>
                  <Button type="submit">Cadastrar</Button>
                </Form>
              </section>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default Home;
