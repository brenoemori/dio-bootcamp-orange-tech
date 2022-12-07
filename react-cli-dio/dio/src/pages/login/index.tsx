import React from "react";

import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


import { api } from '../../services/api'
import { Column, Container, SubTitleLogin, EsqueciText, Row, Title, TitleLogin, Wrapper  } from'./styles';

const schema = yup.object({
    email: yup.string().email('email não é válido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
  }).required();



const Login = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState : { errors } } = useForm({
        resolve: yupResolver(schema),
        mode: 'onChange',
    });
 
    const onSubmit = formData => {
        try {
            const { data } = api.get(`users?email=${formData.email}&senha=${formData.password}`);
            console.log(`returno api`, api)
        }catch{
            alert('Houve um erro, tente novamente.')
        }
    };
    
    console.log(errors)

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
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" />
                        <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" />
                        <Button name="password" title="Entrar" variant= "secondary" type= "submit" handleClickLogIn/>
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