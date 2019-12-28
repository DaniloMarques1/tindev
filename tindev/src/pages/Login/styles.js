import styled from 'styled-components';

export const Container = styled.View `
    flex: 1;
    background-color: #f5f5f5;
    justify-content: center;
    align-items: center;
    padding: 30px;
`;

export const LogoImg = styled.Image ` 

`;

export const Input = styled.TextInput ` 
    height: 46px;
    align-self: stretch;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #fff; 
    padding: 0 15px;
    margin-top: 20px;
`;

export const Button = styled.TouchableOpacity ` 
    height: 46px;
    align-self: stretch;
    background-color: #df4723;
    border-radius: 4px;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
 `;

 export const ButtonText = styled.Text ` 
    color: #fff;
    font-weight: bold;
    font-size: 16px;
 `;