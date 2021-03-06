import styled from 'styled-components';

export const Container = styled.SafeAreaView ` 
    flex: 1;
    background-color: #f5f5f5;
    align-items: center;
    justify-content: space-between;
`;

export const ImageLogo = styled.Image ` 
    margin-top: 30px;
`
export const Avatar = styled.Image ` 
    flex: 1;
    height: 300px;
 `;
export const CardContainer = styled.View ` 
    flex: 1;
    align-self: stretch;
    justify-content: center;
    max-height: 500px;
`
export const Card = styled.View ` 
    border: 1px solid #ddd;
    border-radius: 8px;
    margin: 30px;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

export const Footer = styled.View ` 
    background-color: #fff;
    padding: 15px 20px;
 `;

 export const DevName = styled.Text ` 
 font-size: 16px;
 font-weight: bold;
 color: #333;
 `;

 export const DevBio = styled.Text ` 
    font-size: 14px;
    color: #999;
    margin-top: 5px;
    line-height: 18px;
 `;
export const ButtonLogout = styled.TouchableOpacity ` 
`;
export const ImageButton = styled.Image  ` 
`

 export const ContainerButtos = styled.View `
    flex-direction:  row;
    margin-bottom: 30px;
`;

export const Button = styled.TouchableOpacity ` 
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: #fff;
    align-items: center;
    justify-content: center;
    margin: 0 20px;
`;

export const End = styled.Text ` 
    align-self: center;
    font-size: 32px;
    color: #999;
    font-weight: bold;
`;