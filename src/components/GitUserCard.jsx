import { Card, Col, Container, Row } from 'react-bootstrap'
import { FaBuilding, FaLink, FaMapMarkerAlt, FaTwitter, FaUser } from 'react-icons/fa';
import errorImg from "../assets/404error.png";
import '../App.css';

const GitUserCard = ({ user, error }) => {
    const _formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        });
    };

    if (error?.message === "Not Found") {
        return (
            <Card className="p-4 shadow text-center border rounded-4 error-card">
                <Card.Body className="d-flex flex-column align-items-center gap-3">
                    <img
                        src={errorImg}
                        alt="404 GitHub Not Found"
                        style={{ maxWidth: '300px', objectFit: 'contain' }}
                    />
                    <Card.Title>User not found</Card.Title>
                    <Card.Text>We couldn't find that GitHub user. Try searching again.</Card.Text>
                </Card.Body>
            </Card>
        );
    }


    if (!user) {
        return (
            <Card className='p-4 shadow text-center no-user-card border rounded-4'>
                <Card.Body className=' d-flex flex-column align-items-center gap-3'>
                    <div className='user-icon'>
                        <FaUser size="16px" />
                    </div>
                    <Card.Title>Search for a Github User</Card.Title>
                    <Card.Text>
                        Enter a username above to visit their profile and repositories.
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }

    return (
        <Card className='d-flex flex-row flex-sm-nowrap gap-2 border rounded-4 shadow user-card mb-5'>
            <Card.Img src={user.avatar_url} className='mt-3' />
            <Card.Body className='mt-3'>
                <div className='d-flex flex-column gap-2 mb-2 card-body-cont1'>
                    <div className='d-flex flex-row justify-content-between card-info'>
                        <div>
                            <Card.Title>
                                {((user.name || user.login)[0]?.toUpperCase() || '') + (user.name || user.login).slice(1)}
                            </Card.Title>
                            <Card.Link href={user.html_url} target='_blank'>@{user.login}</Card.Link>
                        </div>
                        <Card.Text>Joined {_formatDate(user.created_at)}</Card.Text>
                         <Card.Text className='user-bio d-lg-none d-md-none d-sm-block'>{user.bio || 'This profile has no bio.'}</Card.Text>
                    </div>
                    <Card.Text className='user-bio d-lg-block d-md-block d-sm-none d-none'>{user.bio || 'This profile has no bio.'}</Card.Text>
                </div>
                <div className='d-flex flex-row justify-content-evenly m-4 user-info'>
                    <div className='d-flex flex-column align-items-center mt-2 '>
                        <h4>Repos</h4>
                        <p>{user.public_repos}</p>
                    </div>
                    <div className='d-flex flex-column align-items-center mt-2'>
                        <h4>Followers</h4>
                        <p>{user.followers}</p>
                    </div>
                    <div className='d-flex flex-column align-items-center mt-2'>
                        <h4>Following</h4>
                        <p>{user.following}</p>
                    </div>
                </div>

                <Container className='m-4 p-2'>
                    <Row className='card-bottom'>
                        <Col className='d-flex flex-row gap-2'>
                            <FaBuilding className='mt-1 fa-icons' size="24px" />
                            <p>{user.company || 'Not available'}</p>
                        </Col>
                        <Col className='d-flex flex-row gap-2'>
                            <FaTwitter className='mt-1 fa-icons' size="24px" />
                            <p>{user.twitter_username || 'Not available'}</p>
                        </Col>
                    </Row>
                    <Row className='card-bottom'>
                        <Col className='d-flex flex-row gap-2'>
                            <FaMapMarkerAlt className='mt-1 fa-icons' size="24px" />
                            <p>{user.location || 'Not available'}</p>
                        </Col>
                        <Col className='d-flex flex-row gap-2'>
                            <FaLink className='mt-1 fa-icons' size="24px" />
                            <p>{user.blog || 'Not available'}</p>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    )
}

export default GitUserCard