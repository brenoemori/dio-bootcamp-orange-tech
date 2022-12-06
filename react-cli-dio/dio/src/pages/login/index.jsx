import React from "react";

import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Column, Container, SubTitleLogin, EsqueciText, Row, Title, TitleLogin, Wrapper  } from'./styles';

const schema = yup.object({
    email: yup.string().email('email não é válido').required(),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required(),
  }).required();



const Login = () => {
    const navigate = useNavigate();
    const { control, handleSubmit, formState : { errors, isValid } } = useForm({
        resolve: yupResolver(schema),
        mode: 'onChange'
    });
 

    console.log(isValid, errors)

    const onSubmit = data => console.log(data);


    const handleClickLogIn = () => {
        navigate('/Feed')
    }

    return ( <>
        <Header />
        <Container>
            <Column>
                <Title> 
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="email" control={control} placeholder="E-mail" />
                        <Input name="password" control={control} placeholder="Senha" type="password" />
                        <Button name="password" title="Entrar" variant= "secondary" type= "submit" />
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <EsqueciText>Criar Conta</EsqueciText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login }