import styled from 'styled-components';

export const Main = styled.main `
    max-width: 980px;
    margin: 0 auto;
    padding: 50px 0;
    text-align: center;
    ul {
        list-style: none;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 30px;
    }
    ul li {
        display: flex;
        flex-direction: column;
    }
    ul li footer {
        flex: 1;
        background-color: #fff;
        border: 1px solid #eee;
        padding: 15px 20px;
        text-align: left;
        border-radius: 0 0 5px 5px;
    }

    ul li footer strong {
        font-size: 16px;
        color: #333;
    }
    ul li footer p {
            font-size: 14px;
            line-height: 20px;
            color: #999;
            margin-top: 5px;
    }
`;

export const AvatarImg = styled.img `
    max-width: 100%;
`;

export const DivButtons = styled.div `
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
`;

export const Button = styled.button `
    height: 50px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .5);
    border-radius: 4px;
    border: 0;
    background-color: #fff;
    cursor: pointer;
    :hover {
        img {
            transform: translateY(-5px);
            transition: all .2s;
        }
    }
`;
export const End = styled.h1 ` 
    font-size: 32px;
    color: #999;
    font-weight: bold;
    margin-top: 100px;
`;