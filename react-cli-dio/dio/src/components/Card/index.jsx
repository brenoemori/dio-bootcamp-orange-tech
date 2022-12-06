import React from 'react'

import { 
    CardContainer, 
    Content, 
    HasInfo, 
    ImageBackground, 
    PostInfo, 
    UserInfo, 
    UserPicture 
} from'./styles';

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src='https://media-exp1.licdn.com/dms/image/C4D16AQFH1ZEmeIM4gw/profile-displaybackgroundimage-shrink_350_1400/0/1668628243294?e=1675296000&v=beta&t=zpM6-6XaHWOTqf9ELbqIctfr3MMZz17ZPpjSkOXm6fE'/>
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/109538862?v=4' />
                <div>
                    <h4>Breno Emori</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito o curso de html e css no bootcamp dio Orange Tech+...<strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JavaScript</h4>
                <p>
                    16
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card }