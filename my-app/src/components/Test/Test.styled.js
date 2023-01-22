import styled from 'styled-components'
const Container = styled.div`
    width: 730px;
    height: 449px;
    margin-top: 20px;
`
const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
    height: 38px;
`
const Title = styled.div`
    width: 129px;
    height: 39px;
    font-weight: 700;
    font-size: 26px;
    line-height: 39px;
    color: #222731;
`
const DarkMode = styled.div`
    font-weight: 700;
    font-size: 13px;
    line-height: 19px;
    width: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: right;
    cursor: pointer;
    letter-spacing: 2.5px;
    color: #697C9A;
`
const IBox = styled.div`
    width: 730px;
    height: 69px;
    display: flex;
    align-items: center;
    background-color: #FEFEFE;
    box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
    border-radius: 15px;
    margin-top: 36px;
`
const Search = styled.div`
    margin-left: 32px;
    display: flex;
    align-items: center;
`
const Input = styled.input`
    width: 350px;
    border: 0;
    outline: 0;
    height: 35px;
    margin-left: 24px;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: #222731;
`
const NoResult = styled.div`
    background: #0079FF;
    border-radius: 10px;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    width: 106px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    margin-left: 180px;
    transition: 0.5s;
    cursor: pointer;
    &:hover{
        background-color: transparent;
        border: 1px solid blue;
        color: #0079FF;
    }
`
const BoxInfo = styled.div`
    width: 730px;
    display: flex;
    justify-content: center;
    gap: 37px;
    height: 444px;
    background: #FEFEFE;
    box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
    border-radius: 15px;
    margin-top: 26px;
`
const ForImage = styled.div`
    margin-top: 44px;
    width: 117px;
    height: 118px;
    border-radius: 50%;
`
const Infos = styled.div`
    margin-top: 44px;
    width: 480px;
    height: 350px;
`
const TitleBox = styled.div`
    display: flex;
    justify-content: space-between;
    height: 63px;
`
const Name = styled.div`
    width: 176px;
    height: 39px;
`
const Full = styled.div`
    font-weight: 700;
    font-size: 26px;
    line-height: 39px;
    color: #2B3442;
`
const NicName = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0079FF;
`
const Age = styled.div`
    font-weight: 400;
    font-size: 15px;
    height: 39px;
    display: flex;
    align-items: center;
    line-height: 22px;
    text-align: right;
    color: #697C9A;
`
const BioBox = styled.div`
    width: 480px;
    height: 25px;
    margin-top: 20px;
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    color: #4B6A9B;
    mix-blend-mode: normal;
    opacity: 0.75;
`
const FollowInfo = styled.div`
    width: 480px;
    height: 85px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #F6F8FF;
    border-radius: 10px;
    margin-top: 32px;
`
const Repos = styled.div`
    width: 72px;
    height: 53px;
`
const Text = styled.div`
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    color: #4B6A9B;
`
const Num = styled.div`
    font-weight: 700;
    font-size: 22px;
    line-height: 33px;
    text-transform: uppercase;
    color: #2B3442;
`
const Location = styled.div`
    width: 480px;
    margin-top: 37px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 100px;
`
const Item = styled.div`
    width: 225px;
    height: 22px;
    display: flex;
    gap: 19px;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    cursor: pointer;
    color: #4B6A9B;
`
export { Container,
    ForImage,
    BioBox,
    Age,
    FollowInfo,
    Repos,
    Text,
    Num,
    Infos,
    Full,
    TitleBox,
    Location,
    Item,
    Header,
    Name,
    NicName,
    Title,
    DarkMode,
    IBox,
    Search,
    Input,
    NoResult,
    BoxInfo 
}    