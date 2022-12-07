import { Link } from "react-router-dom";

import BannerImage from'../../assets/banner.png'
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { Header } from "../../components/Header";

import { Container, Column, Title, TitleHighLight} from'./styles';

const Feed = () => {
    return ( <>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />          
            </Column>
            <Column flex={1}>
                <TitleHighLight># RANKING TOP 5 DA SEMANA</TitleHighLight>
                <UserInfo percentual={80} nome="Breno Emori" image="https://avatars.githubusercontent.com/u/109538862?v=4"/>
                <UserInfo percentual={27} nome="Breno Emori" image="https://avatars.githubusercontent.com/u/109538862?v=4"/>
                <UserInfo percentual={65} nome="Breno Emori" image="https://avatars.githubusercontent.com/u/109538862?v=4"/>
                <UserInfo percentual={50} nome="Breno Emori" image="https://avatars.githubusercontent.com/u/109538862?v=4"/>
            </Column>
        </Container>
    </>)
}

export { Feed }