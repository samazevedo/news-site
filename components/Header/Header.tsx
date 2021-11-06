import Link from 'next/link'
import { Center } from '../Center/Center.style'
import { Container, Logo } from './styles'

export const Header = () => {
    return (
        <Container>
            <Center>
                <Logo>
                    <Link href='/'>
                        <a>What's Next?</a>
                    </Link>
                </Logo>
            </Center>
        </Container>
    )
}
