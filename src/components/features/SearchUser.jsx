import { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap';
import { FaSearch, FaUser } from 'react-icons/fa';
import '../../App.css';

const SearchUser = ({ onSearch }) => {
    const [inputUsername, setInputUsername] = useState('');

    const _handleSubmit = (e) => {
        e.preventDefault();
        onSearch(inputUsername.trim());
    }

    return (
        <div className='m-4 mt-0 d-flex flex-column gap-2 align-items-center p-4 shadow border rounded-4 search-container'>
            <div className='search-icon'>
                <FaSearch size="16px" />
            </div>
            <h3 className='fs-4'>Find Github Users</h3>
            <p>Enter a Github username to explore their profile and projects.</p>
            <Form onSubmit={_handleSubmit}>
                <InputGroup>
                    <InputGroup.Text><FaUser /></InputGroup.Text>
                    <Form.Control
                        type='text'
                        placeholder='Search by username'
                        value={inputUsername}
                        onChange={(e) => setInputUsername(e.target.value)}
                    />
                     <Button type='submit' className='search-btn'>
                    Search
                </Button>
                </InputGroup>
            </Form>
        </div>
    )
}

export default SearchUser