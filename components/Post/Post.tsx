import { Card, Figure, Title, Content } from './style'
import Link from 'next/link'

export const Post = () => {
    return (
        <Link href='/post/example' passHref>
            <Card>
                <Figure>
                    <img alt='Post photo' src='/image1.jgp' />
                </Figure>
                <Title>Post title</Title>
                <Content>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ea doloribus necessitatibus, eius saepe reiciendis
                        minima veniam. Corrupti officia velit quae, dolores
                        sequi quas mollitia nemo quo ab veritatis iste
                        distinctio!
                    </p>
                </Content>
            </Card>
        </Link>
    )
}
