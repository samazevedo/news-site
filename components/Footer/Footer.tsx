import { Center } from '../Center/Center.style'
import { Container } from './Footer.style'

export const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <Container>
            <Center>
                <a href='https://newline.co'>Newline.co</a> © {currentYear}
            </Center>
        </Container>
    )
}
